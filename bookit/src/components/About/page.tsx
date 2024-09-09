'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import glogo from 'src/app/images/githublogo.svg';
import dlogo from 'src/app/images/discordlogo.svg';
import bg1 from 'src/app/images/bg1.jpg';

const About = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  const openLink = (url: string | URL | undefined) => {
    window.open(url, '_blank');
  };

  const teamMembers = [
    {
      name: 'tanmay',
      github: 'https://github.com/tanmaydot',
      discord: 'tanmaydot',
    },
    {
      name: 'deepak',
      github: 'https://github.com/lodgingzeus',
      discord: 'lodgingzeus',
    },
    {
      name: 'aditya',
      github: 'https://www.github.com/notadi',
      discord: 'aditya_m',
    },
  ];

  return (
    <div className="py-24 sm:py-32 bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${bg1.src})` }}>
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl mr-4">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">We are a group of friends who have come together to create a React-Next.js project. This is our first endeavor as a team, and we hope you enjoy it. We invite you to explore our social platforms and connect with us.</p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 uppercase">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex items-center gap-x-3">
              <div className="relative w-16 h-16 rounded-full overflow-hidden hover:cursor-pointer transition duration-300 transform hover:scale-110">
                <Image src={glogo} alt="GitHub" layout="fill" objectFit="cover" onClick={() => openLink(member.github)} />
              </div>
              <div>
                <h3 onClick={() => openLink(member.github)} className="text-base font-semibold tracking-wide hover:cursor-pointer mt-12">{member.name}</h3>
                <br />
                <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => copyToClipboard(member.discord)}>
                  <Image src={dlogo} alt="Discord" width={16} height={16} />
                  <p className="text-sm font-semibold">Discord: {member.discord}</p>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
      {isCopied && (
        <div className="fixed bottom-10 right-10 bg-gray-900 text-white px-4 py-2 rounded">Copied to clipboard</div>
      )}
    </div>
  );
};

export default About;

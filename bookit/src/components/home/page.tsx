'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import bg from '@/app/images/bg.jpg';

const Home = () => {
  useEffect(() => {
    document.body.style.overflow = 'auto'; // Enable scrolling
    return () => {
      document.body.style.overflow = 'visible'; // Restore default scrolling
    };
  }, []);

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen py-5" style={{ overflowX: 'hidden' }}>
        <div className="flex w-full h-screen justify-center items-center absolute inset-0 z-0">
          <Image src={bg} alt="Background" fill />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <p className="text-black text-9xl font-semibold object-cover m-4">
            BOOKIT
          </p>
          <p className="text-black m-4 text-xl">
            Your Gateway To Endless Adventures
          </p>
        </div>
      </main>
    </>
  );
}

export default Home

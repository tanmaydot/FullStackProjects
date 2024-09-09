'use client';
import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

const Hotels = ({ hotelList }: any) => {
  let ref = useRef(null);
  const { push } = useRouter();

  const handleClick = (item: any) => {
    push(`/hotel/${item.id}`);
  };

  return (
    <div className='border border-y-alt'>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {hotelList.map((item: any) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-2xl"
            >
              <CldImage
                src={item.images[0]}
                width={400}
                height={250}
                alt="hotel image"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-end">
                <div className="text-center absolute left-0 right-0 bg-black bg-opacity-60">
                  <h3 className="text-lg font-medium text-white mb-2">{item.name}</h3>
                  <p className="text-white">${item.price}</p>
                </div>
                <button
                  onClick={() => handleClick(item)}
                  className="m-24 p-2.5 bg-black bg-opacity-40 text-white font-semibold uppercase rounded-md hover:bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  BookIT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotels;

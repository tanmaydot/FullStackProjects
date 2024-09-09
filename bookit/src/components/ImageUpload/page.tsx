'use client'
import { CldUploadButton } from 'next-cloudinary';
import { useCallback, useState } from 'react';
import Image from 'next/image';

const ImageUpload = ( { onChange }: any ) => {
  const [selectedImage, setSelectedImage] = useState<null | string>(null);

  const handleUpload = useCallback((result: any) => {
    onChange(result.info.secure_url);
    setSelectedImage(result.info.secure_url)
  }, [onChange]);

  const handleImageRemove = () => {
    setSelectedImage(null);
    };

  return (
    <div>
      <label htmlFor="image-upload" className="block mb-2 font-semibold">
        Upload an Image
      </label>
      {selectedImage ? (
        <div className="mb-4">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              width={500}
              height={500}
              className="m-1 w-32 h-32 object-cover rounded"
            />
            <button
              className="absolute top-0 m-1 p-1 bg-neutral-300 rounded-full shadow flex justify-around"
              onClick={handleImageRemove}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-red-500 inline-flex"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="border border-gray-300 rounded-md p-4">
          <CldUploadButton uploadPreset="cvesltdr" onUpload={handleUpload}/>       
            <label htmlFor="image-upload" className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="w-6 h-6 mx-auto text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageUpload
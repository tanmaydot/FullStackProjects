'use client'

import React, { ChangeEvent } from 'react';
import ImageUpload from '@/components/ImageUpload/page';

type NewListingProps = {
  formData: {
    hotelName: string;
    price: string;
    location: string;
    images: string[];
    amenities: string;
    description: string;
  };
  setFormData: React.Dispatch<
    React.SetStateAction<{
      hotelName: string;
      price: string;
      location: string;
      images: string[];
      amenities: string;
      description: string;
    }>
  >;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void; // Update the type here
};

const NewListing = ({
  formData,
  setFormData,
  handleSubmit,
}: NewListingProps) => {

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: any) => {
    console.log(e)
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, e]
    }))
  }

  return (
    <form className="max-w-md mx-auto p-6 bg-white rounded shadow-lg" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-6">Create new Listing</h2>
      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="hotelName">
          Hotel Name
        </label>
        <input
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
          type="text"
          name="hotelName"
          id="hotelName"
          onChange={handleChange}
          value={formData.hotelName}
          placeholder="Enter hotel name"
          required // Make the input required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="price">
          Price
        </label>
        <input
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
          type="text"
          name="price"
          id="price"
          onChange={handleChange}
          value={formData.price}
          placeholder="Enter price"
          required // Make the input required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="location">
          Location
        </label>
        <input
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          value={formData.location}
          placeholder="Enter location"
          required // Make the input required
        />
      </div>
      <div className="mb-4">
        <ImageUpload onChange={handleImageChange} />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="amenities">
          Amenities
        </label>
        <input
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
          type="text"
          name="amenities"
          id="amenities"
          onChange={handleChange}
          value={formData.amenities}
          placeholder="Enter amenities"
          required // Make the input required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 font-semibold" htmlFor="description">
          Description
        </label>
        <textarea
          className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500"
          name="description"
          id="description"
          rows={4}
          onChange={handleChange}
          value={formData.description}
          placeholder="Enter description"
          required // Make the textarea required
        />
      </div>
      <button
        className="w-full px-4 py-2 text-white bg-primary rounded-md hover:bg-secondary"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default NewListing;
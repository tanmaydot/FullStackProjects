'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"
import NewListing from '@/components/NewListing/page';
import 'react-toastify/dist/ReactToastify.css';


type FormData = {
  hotelName: string;
  price: string;
  location: string;
  images: string[];
  amenities: string;
  description: string;
}

const Page = ( {params}: any) => {

  const { id } = params

  const [formData, setFormData] = useState<FormData>({
    hotelName: '',
    price: '',
    location: '',
    images: [],
    amenities: '',
    description: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {

      const newObj = { ...formData, hostId: id }

      const response = await fetch('/api/newlisting', {
        method: 'POST',
        body: JSON.stringify(newObj),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if(data.success === "success") {
        toast.success('Successfully created new hotel listing')
        setFormData({
          hotelName: '',
          price: '',
          location: '',
          images: [],
          amenities: '',
          description: '',
        })
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewListing
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      <ToastContainer />
    </div>
  );
};

export default Page;

/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/Header/page";
import getCurrentUser from "@/actions/getCurrentUser";
import Image from "next/image";
import { getHotelById } from "@/actions/getHotelById";
import BookNow from "@/components/BookNow/page";

const Page = async ({ params }: any) => {
  const currentUser = await getCurrentUser();

  const { id } = params;
  const hotel = await getHotelById(id);

  return (
    <div>
      <Header currentUser={currentUser} />
      <main className="flex flex-col items-center justify-center p-4">
        <div className="container mx-auto mt-8">
          <h1 className="text-5xl font-bold text-center mb-8">
            Hotel {hotel?.name}
          </h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotel?.images.map((image, index) => (
              <div
                key={index}
                className="rounded overflow-hidden shadow-lg"
              >
                <Image
                  src={image}
                  alt={`Hotel Image ${index + 1}`}
                  height={500}
                  width={500}
                  className="object-cover w-full h-64 sm:h-80 md:h-96"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-4 py-2 font-medium  bg-primary bg-opacity-50 rounded hover:bg-secondary">
              Show all photos
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start w-full mt-8">
            <div className="w-full md:w-7/12 md:mr-8">
              <h2 className="text-3xl font-bold mb-4">Hotel Description</h2>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium facilis assumenda perferendis ipsum fugiat error
                atque adipisci, incidunt facere sint quo maxime itaque odio
                molestiae? Quasi harum libero autem corporis.
              </p>
              <br />
              <div>
                <p className="text-2xl font-bold">Hosted by John</p>
                <p className="text-lg font-medium">
                  4 guests. 2 bedrooms, 2 beds
                </p>
              </div>
            </div>
            <div className="w-full md:w-4/12 bg-gray-100 p-6 rounded shadow-md mt-8 md:mt-0">
              <div className="p-4 rounded">
                <BookNow hotel={hotel} currentUser={currentUser} />
              </div>
            </div>
          </div>
          <div className="max-w-xl mt-8">
            <h2 className="text-2xl font-bold mb-4">Reviews</h2>
            <div className="border p-4 rounded">
              {/* Add Lorem Ipsum reviews */}
              <p className="text-gray-700">[Review]</p>
              <p className="text-gray-700">[Review]</p>
              <p className="text-gray-700">[Review]</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;

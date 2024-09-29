import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logo from "../assets/HS&DV/Heetash.zip - 1.png";

// Import images from src/assets
import redNetLehenga from "../assets/2.png";
import deepWineLehenga from "../assets/LOOK_22_3364_720x.webp";
import greenOrganzaLehenga from "../assets/LOOK_22_3364_720x.webp";
import goldTissueLehenga from "../assets/LOOK_22_3364_720x.webp";

// Array of images
const images = [
  redNetLehenga,
  deepWineLehenga,
  greenOrganzaLehenga,
  goldTissueLehenga,
];

const Collection = () => {
  const [collections, setCollections] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fetch the collections data from the API
  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await axios.get(
          "https://heetesh-shah.onrender.com/api/collections"
        );
        setCollections(response.data); // Assuming the API returns an array of collections
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };
    fetchCollections();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? collections.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === collections.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-10 mt-12">
      {/* Text Section */}
      <div className="text-center mb-6">
        <h2 className="mb-2 text-[20px] sm:text-[25px] font-corm font-semibold">
          Explore
        </h2>
        <p className="text-[16px] sm:text-[20px] font-gara font-semibold mt-5 text-gray-600">
          Our curated collection of lehengas, shararas, kurtas and more.
        </p>
      </div>

      {/* Carousel Section (Images) */}
      <div className="relative w-full overflow-hidden mt-5">
        <div className="flex transition-transform ease-out duration-500 gap-4">
          {collections.length > 0 && (
            <div className="w-full flex-shrink-0">
              <Link to={`/collection/${collections[currentIndex]._id}`}>
                <img
                  src={images[currentIndex % images.length]} // Assign image from the images array
                  alt={collections[currentIndex].name}
                  className="w-screen h-screen sm:h-screen lg:h-screen object-cover cursor-pointer"
                />
                <div className="absolute bottom-0 w-full text-center text-white">
                  <h2 className="text-lg sm:text-2xl font-bold font-corm mb-2">
                    {collections[currentIndex].name}
                  </h2>
                  <p className="text-gray-500 font-gara font-semibold">
                    {collections[currentIndex].price}
                  </p>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full px-4 mt-4">
        <button
          className="bg-gray-300 px-4 py-2 rounded-full"
          onClick={prevSlide}
        >
          Previous
        </button>
        <button
          className="bg-gray-300 px-4 py-2 rounded-full"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>

      <div className="mt-6">
        <img src={logo} alt="Heetesh Shah" className="w-64 h-64" />
      </div>
    </div>
  );
};

export default Collection;

import React, { useState, useEffect } from "react";
import axios from "axios";

// Import images from the assets folder
import image2 from "../assets/2.JPG";
import image3 from "../assets/3.JPG";
import image4 from "../assets/4.JPG";
import { Link } from "react-router-dom";

const Discover = () => {
  const [categories, setCategories] = useState([]);

  // Array of images
  const images = [image2, image3, image4];

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://heetesh-shah.onrender.com/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
      {/* Center the heading and paragraph */}
      <div className="mt-[80px] text-center bg-gray-100 flex flex-col items-center">
        <h1 className="uppercase text-[25px] font-corm font-semibold mt-14">
          Discover
        </h1>
        <p className="text-[20px] text-gray-800 font-juli font-semibold mt-3">
          The eternal through its creation.
        </p>
      </div>

      {/* Grid for the images */}
      <div className="grid grid-cols-1 md:grid-cols-1 w-screen h-full mx-auto bg-gray-100 gap-10 ">
        {categories.map((category, index) => (
          <Link to={`/category/${category._id}`} key={category._id}>
            <div className="relative group mt-[40px] cursor-pointer">
              {/* Load the image from the imported array */}
              <img
                src={images[index % images.length]} // Cycle through the imported images
                alt={category.name}
                className="w-screen h-screen object-cover text-center"
              />
              {/* Text Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center mt-96 p-6">
                <h2 className="text-white text-center text-3xl font-semibold font-corm cursor-pointer">
                  {category.name.toUpperCase()}
                </h2>
                <button className="mt-4 text-center text-white border-2 hover:bg-white hover:text-black p-2 border-white font-juli">
                  EXPLORE
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Discover;

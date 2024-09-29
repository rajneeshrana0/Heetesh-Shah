import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaAngleLeft, FaAngleRight } from "react-icons/fa"; // Import angle icons for navigation
import logo from "../assets/HS&DV/Heetash.zip - 1.png";

const NewArrival = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [combinedItems, setCombinedItems] = useState([]); // To store combined data from both APIs
  const [hoveredItemIndex, setHoveredItemIndex] = useState(null); // For tracking the hovered item for image navigation

  // Fetch data from both APIs and combine them
  useEffect(() => {
    const fetchCombinedProducts = async () => {
      try {
        const [productsResponse, collectionProductsResponse] =
          await Promise.all([
            fetch("https://heetesh-shah.onrender.com/api/products/products"),
            fetch(
              "https://heetesh-shah.onrender.com/api/collection-products/products"
            ),
          ]);

        const productsData = await productsResponse.json();
        const collectionProductsData = await collectionProductsResponse.json();

        // Combine both arrays of data
        const combinedData = [...productsData, ...collectionProductsData];
        setCombinedItems(combinedData); // Set the combined data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCombinedProducts();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? combinedItems.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === combinedItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handler for left and right image navigation
  const handlePrevImage = (index) => {
    if (hoveredItemIndex === index) {
      // Add logic for changing to the previous image when available
    }
  };

  const handleNextImage = (index) => {
    if (hoveredItemIndex === index) {
      // Add logic for changing to the next image when available
    }
  };

  return (
    <div className="w-screen h-[1000px] flex flex-col items-center justify-center py-10 sm:py-2 font-corm">
      {/* Text Section */}
      <div>
        <img src={logo} alt="Heetesh Shah" className="w-64 h-64 text-center" />
      </div>
      {/* <div className="text-center mb-6 px-4">
        <h2 className="text-[20px] md:text-[25px] mt-[40px] mb-2 font-semibold uppercase">
          Divinity Through Design
        </h2>
        <p className="text-[16px] md:text-[20px] font-juli font-semibold text-gray-600">
          Elegant, Effortless & Handcrafted for Celebrations.
        </p>
      </div> */}

      {/* Full-Screen Image Carousel */}
      <div className="relative w-screen h-screen overflow-hidden">
        <div
          className="flex transition-transform ease-out duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }} // Only one image visible at a time, using 100% width
        >
          {combinedItems.map((item, index) => (
            <div
              key={item._id}
              className="w-screen h-screen flex-shrink-0 relative"
              onMouseEnter={() => setHoveredItemIndex(index)}
              onMouseLeave={() => setHoveredItemIndex(null)}
            >
              {/* Display the image */}
              <Link to={`/product/${item._id}`}>
                <img
                  src={item.images[1]}
                  alt={item.name}
                  className="w-screen h-screen object-cover" // Full-screen image
                />
              </Link>
              <div className="absolute bottom-10 left-4 text-white">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <p className="text-gray-300">Rs. {item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

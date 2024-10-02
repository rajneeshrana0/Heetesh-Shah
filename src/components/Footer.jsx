import axios from "axios";
import React, { useEffect, useState } from "react";
import image2 from "../assets/2.JPG";
import image3 from "../assets/3.JPG";
import image4 from "../assets/4.JPG";
import { Link } from "react-router-dom";

const Footer = () => {
  const [categories, setCategories] = useState([]);
  const [collections, setCollections] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
  return (
    <footer className="bg-[#4B1B20] text-[#EEDBAC] py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:px-0 font-corm ml-14">
        <div>
          <h3 className="font-bold mb-4 font-juli">WHAT'S NEW</h3>
          <ul className="space-y-2 uppercase">
            {categories.map((category, index) => (
              <Link to={`/category/${category._id}`} key={category._id}>
                <div className="flex flex-col mt-1">
                  <h2>{category.name.toUpperCase()}</h2>
                </div>
              </Link>
            ))}
            <h1 className="font-extrabold">Collection</h1>
            {collections.length > 0 && (
              <Link to={`/collection/${collections[currentIndex]._id}`}>
                <div className="flex flex-col mt-1">
                  <h2>{collections[currentIndex].name}</h2>
                </div>
              </Link>
            )}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-juli mt-9 lg:mt-0">
            WORLD OF HEETESH SHAH
          </h3>
          <ul className="space-y-2 uppercase">
            <li className="hover:cursor-pointer">History</li>
            <li className="hover:cursor-pointer">Collaborations</li>
            <li className="hover:cursor-pointer">The Art Foundation</li>
            <li className="hover:cursor-pointer">Social Initiatives</li>
            <li className="hover:cursor-pointer">Craft Preservation</li>
            <li className="hover:cursor-pointer">Art of Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-juli mt-9 lg:mt-0">
            CUSTOMER CARE
          </h3>
          <ul className="space-y-2 uppercase">
            <li className="hover:cursor-pointer">Contact</li>
            <li className="hover:cursor-pointer">Stores</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-juli mt-9 lg:mt-0">SOCIAL</h3>
          <ul className="space-y-2 uppercase">
            <li className="hover:cursor-pointer">Instagram</li>
            <li className="hover:cursor-pointer">YouTube</li>
            <li className="hover:cursor-pointer">Facebook</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-juli mt-9 lg:mt-0">CORPORATE</h3>
          <ul className="space-y-2 uppercase">
            <li className="hover:cursor-pointer">Privacy Policy</li>
            <li className="hover:cursor-pointer">Terms of Use</li>
            <li>
              <a href="/carrier" className="hover:underline">
                Career
              </a>
            </li>
            <li>
              <a href="/shipping-policy" className="hover:underline">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="/refund-policy" className="hover:underline">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:underline">
                FAQ's
              </a>
            </li>
            <li>
              <a href="/size" className="hover:underline">
                Size
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

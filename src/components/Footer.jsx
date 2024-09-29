import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#4B1B20] text-[#EEDBAC] py-10">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 lg:px-0 font-corm ml-14">
        <div>
          <h3 className="font-bold mb-4 font-juli">WHAT'S NEW</h3>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">
              The Curiosity, Art & Antiquity Project
            </li>
            <li className="hover:cursor-pointer">Bridal Couture 2024</li>
            <li className="hover:cursor-pointer">Met Gala 2024</li>
            <li className="hover:cursor-pointer">
              Love. Wanderlust. Curiosity
            </li>
            <li className="hover:cursor-pointer">Wild Wonderful World</li>
            <li className="hover:cursor-pointer">Estée Lauder X HEETESH</li>
            <li className="hover:cursor-pointer">X Bergdorf Goodman</li>
            <li className="hover:cursor-pointer">The High Jewellery Show</li>
            <li className="hover:cursor-pointer">Autumn / Winter 2023</li>
            <li className="hover:cursor-pointer">Heritage Bridal</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-juli mt-9 lg:mt-0">
            WORLD OF HEETESH SHAH
          </h3>
          <ul className="space-y-2">
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
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">Contact</li>
            <li className="hover:cursor-pointer">Stores</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-juli mt-9 lg:mt-0">SOCIAL</h3>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">Instagram</li>
            <li className="hover:cursor-pointer">YouTube</li>
            <li className="hover:cursor-pointer">Facebook</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 font-juli mt-9 lg:mt-0">CORPORATE</h3>
          <ul className="space-y-2">
            <li className="hover:cursor-pointer">Privacy Policy</li>
            <li className="hover:cursor-pointer">Terms of Use</li>
            <li>
              <a href="/career" className="hover:underline">
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

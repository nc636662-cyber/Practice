import React from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Footer = () => {
const navigate=useNavigate();  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold text-pink-400 mb-3">
            ShopX
          </h2>
          <p className="text-sm leading-6">
            Discover premium cosmetics and luxury fragrances.
            Enhance your beauty with our high-quality products.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-400 cursor-pointer">Makeup</li>
            <li className="hover:text-pink-400 cursor-pointer">Skin Care</li>
            <li className="hover:text-pink-400 cursor-pointer">Hair Care</li>
            <li className="hover:text-pink-400 cursor-pointer">Fragrances</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Customer Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li onClick={()=> navigate("/Orders")} className="hover:text-pink-400 cursor-pointer">My Orders</li>
            <li onClick={()=> navigate("/Cart")} className="hover:text-pink-400 cursor-pointer">Cart</li>
            <li className="hover:text-pink-400 cursor-pointer">Help Center</li>
            <li className="hover:text-pink-400 cursor-pointer">Returns Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Contact
          </h3>
          <p className="text-sm">Email: Glowbeauty@gmail.com</p>
          <p className="text-sm">Phone: +91 123 456 7890</p>
          <p className="text-sm">India</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">
            Follow Us
          </h3>
          <div className="flex flex-col gap-2 text-sm">
            <span className="hover:text-pink-400 cursor-pointer">Facebook</span>
            <span className="hover:text-pink-400 cursor-pointer">Instagram</span>
            <span className="hover:text-pink-400 cursor-pointer">Twitter</span>
          </div>
        </div>

      </div>
      
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        <p>© 2026 Glow Beauty | All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;
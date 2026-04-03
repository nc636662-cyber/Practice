import React from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffaf3] px-4">

      <div className="text-center max-w-xl">
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Welcome to Our Store
        </h1>

        <p className="text-gray-600 text-lg font-bold leading-relaxed mb-6">
          Discover high-quality products at the best prices.
          Shop smart, save more, and enjoy a seamless shopping experience.
        </p>

        <div>
          
          <button onClick={() => navigate("/Product")}className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Explore Our Collection
           </button>
        </div>
       
      </div>

    </div>
  );
};

export default Home;
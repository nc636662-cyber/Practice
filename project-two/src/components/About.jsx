import React from 'react'
import logo from '../assets/logo.png'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-6 py-10">

      <img 
        src={logo} 
        alt="logo" 
        className="w-28 h-28 object-contain mb-6"
      />

      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
        Welcome to Our Beauty World
      </h2>

      <p className="max-w-2xl text-center text-gray-600 mb-8 leading-7">
        Discover the finest range of cosmetics designed to enhance your natural beauty. 
        We bring you premium quality products that are safe, effective, and made for every skin type.
      </p>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-pink-500 mb-2">
            Premium Quality Products
          </h3>
          <p className="text-gray-600 text-sm">
            Our cosmetics are made with high-quality ingredients to give you the best results 
            without harming your skin.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-pink-500 mb-2">
            Skin-Friendly & Safe
          </h3>
          <p className="text-gray-600 text-sm">
            We focus on products that are gentle on skin, dermatologically tested, and suitable 
            for all skin types.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-pink-500 mb-2">
            Wide Range of Beauty Products
          </h3>
          <p className="text-gray-600 text-sm">
            From lipsticks and foundations to skincare essentials, explore a complete beauty collection.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-lg transition duration-300">
          <h3 className="font-semibold text-lg text-pink-500 mb-2">
            Trending & Latest Styles
          </h3>
          <p className="text-gray-600 text-sm">
            Stay updated with the latest beauty trends and discover new looks every day.
          </p>
        </div>

      </div>

    </div>
  )
}

export default About
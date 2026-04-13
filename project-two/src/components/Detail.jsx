import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from "./CartContext";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";

const Detail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (error) {
        console.log("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return (
      <h2 className="text-center text-xl font-semibold mt-10 animate-pulse">
        Loading...
      </h2>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full grid md:grid-cols-2 gap-6 p-6">

        {/* Image */}
        <div className="flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-h-80 object-contain rounded-xl"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">

          <div>
            <h2 className="text-2xl font-bold mb-3 text-gray-800">
              {product.title}
            </h2>

            <p className="text-gray-600 mb-4 leading-relaxed">
              {product.description}
            </p>

            <p className="text-lg font-semibold text-green-600 mb-4">
              Price: ${product.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-4">

            <button
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              onClick={() => {
                addToCart(product);
                navigate("/cart");
                alert("Item added");
              }}
            >
              Add to Cart
            </button>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
                onClick={() => navigate(`/detail/${Number(id) - 1}`)}
              >
                <AiFillFastBackward size={20} />
              </button>

              <button
                className="bg-gray-200 p-3 rounded-full hover:bg-gray-300 transition"
                onClick={() => navigate(`/detail/${Number(id) + 1}`)}
              >
                <AiFillFastForward size={20} />
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Detail
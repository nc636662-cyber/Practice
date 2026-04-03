import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cart } = useContext(CartContext);
 const navigate=useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Your Cart
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
              {item.title}
            </h3>

            <p className="text-white-600 font-bold mb-4 text-lg">
              ₹{item.price}
            </p>

            <button
            onClick={() => {alert("Order placed successfully!");navigate("/Orders") }}
            className="w-full text-white py-2 rounded-lg font-medium active:scale-95 transition-all duration-200 hover:brightness-90"
            style={{ backgroundColor: "#ff6b00" }}
            >
              Order Now
              </button>
           
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
        onClick={() => navigate("/Product")}
        className="mt-3 px-5 py-2 bg-orange-500 text-white rounded-md text-sm font-medium hover:bg-orange-600 active:scale-95 transition"
        >
          Shope More
          </button>
          
          </div>
      </div>
  );
};

export default Cart;
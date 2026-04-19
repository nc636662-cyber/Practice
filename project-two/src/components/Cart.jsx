import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const navigate = useNavigate();

  // ✅ total price
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price;
  }, 0);

  // ✅ place order
  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Cart is empty ❌");
      return;
    }

    const existingOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      date: new Date().toLocaleString()
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([...existingOrders, newOrder])
    );

    // clear cart
    setCart([]);

    alert("✅ Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Your Cart
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cart.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md p-5"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-44 object-cover rounded-lg mb-4"
            />

            <h3 className="text-lg font-semibold mb-2">
              {item.title}
            </h3>

            <p className="font-bold text-lg">
              ₹{item.price}
            </p>
          </div>
        ))}
      </div>

      {/* ✅ Total Price */}
      <h2 className="text-xl font-bold text-center mt-6">
        Total Price: ₹{totalPrice}
      </h2>

      {/* ✅ Order Button */}
      <div className="flex justify-center">
        <button
          onClick={handleOrder}
          className="mt-5 px-6 py-2 bg-orange-500 text-white rounded"
        >
          Order Now
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => navigate("/Product")}
          className="mt-3 px-5 py-2 bg-gray-700 text-white rounded"
        >
          Shop More
        </button>
      </div>
    </div>
  );
};

export default Cart;
import React from "react";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeall, removetowish } from "../slice/cartslice";

const Wishlist = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ Redux se data lo
  const wishlist = useSelector((state) => state.Wishl.item);

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-6 text-center">
        My Wishlist
      </h1>

      {/* ❌ Empty case */}
      {wishlist.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-500 text-lg">No items in wishlist 😔</p>

          <button
            onClick={() => navigate("/Product")}
            className="mt-4 bg-orange-500 text-white px-5 py-2 rounded-lg"
          >
            Explore Products
          </button>
        </div>
      ) : (
        <>
          {/* 🧹 Clear All */}
          <div className="flex justify-end mb-4">
            <button
              onClick={() => dispatch(removeall())}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {wishlist.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg shadow-md p-4 text-center hover:shadow-lg transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded"
                />

                <p className="mt-3 text-lg font-medium">
                  {item.title}
                </p>

                <p className="text-sm text-gray-500">
                  {item.description?.slice(0, 50)}...
                </p>

                <p className="mt-2 flex items-center justify-center gap-1 text-lg font-semibold">
                  <RiMoneyRupeeCircleFill />
                  {item.price}
                </p>

                {/* 🛒 Order */}
                <button
                  onClick={() => {
                    alert("Order placed");
                    // navigate("/Orders");
                  }}
                  className="mt-3 bg-orange-600 text-white py-2 px-5 rounded-lg hover:bg-orange-500"
                >
                  Order Now
                </button>

                {/* ❌ Remove */}
                <button
                  onClick={() => dispatch(removetowish(item.id))}
                  className="mt-2 bg-gray-200 px-4 py-1 rounded hover:bg-gray-300"
                >
                  Remove
                </button>
              </div>
            ))}

          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
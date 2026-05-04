import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [cancelReason, setCancelReason] = useState({});
  const [showInput, setShowInput] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  
  const handleCancelClick = (orderId) => {
    setShowInput((prev) => ({
      ...prev,
      [orderId]: true,
    }));
  };

  
  const handleReasonChange = (orderId, value) => {
    setCancelReason((prev) => ({
      ...prev,
      [orderId]: value,
    }));
  };

  
  const confirmCancelOrder = (orderId) => {
    const reason = cancelReason[orderId];

    if (!reason) {
      alert("Please enter reason for cancellation");
      return;
    }

    // Remove order
    const updatedOrders = orders.filter(
      (order) => order.id !== orderId
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">
        My Orders
      </h1>

      
      {orders.length === 0 ? (
        <div className="text-center">
          <p className="mb-4">No Orders Yet </p>

          <button
            onClick={() => navigate("/product")}
            className="bg-green-500 text-white px-5 py-2 rounded"
          >
            Explor product
          </button>
        </div>
      ) : (
        <>
          {orders.map((order) => (
            <div
              key={order.id}
              className="border p-4 mb-4 rounded shadow"
            >
              <h2 className="font-bold">
                Order ID: {order.id}
              </h2>
              <p>Date: {order.date}</p>
              <p className="font-bold">
                Total: ₹{order.total}
              </p>

            
              <button
                onClick={() => handleCancelClick(order.id)}
                className="mt-3 bg-red-500 text-white px-3 py-1 rounded"
              >
                Cancel Order
              </button>

            
              {showInput[order.id] && (
                <div className="mt-3">
                  <input
                    type="text"
                    placeholder="Enter reason..."
                    value={cancelReason[order.id] || ""}
                    onChange={(e) =>
                      handleReasonChange(order.id, e.target.value)
                    }
                    className="border p-2 mr-2"
                  />
                  <button
                    onClick={() => confirmCancelOrder(order.id)}
                    className="bg-black text-white px-3 py-2 rounded"
                  >
                    Confirm
                  </button>
                </div>
              )}

              <hr className="my-2" />

              {order.items.map((item) => (
                <div key={item.id} className="mb-2">
                  <p><b>{item.title}</b></p>
                  <p>₹{item.price}</p>
                </div>
              ))}
            </div>
          ))}

          
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/Product")}
              className="bg-blue-500 text-white px-5 py-2 rounded"
            >
              Explore More Recipes 
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;
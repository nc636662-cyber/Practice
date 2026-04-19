import React from "react";

const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-center">No Orders Yet ❌</p>
      ) : (
        orders.map((order) => (
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

            <hr className="my-2" />

            {order.items.map((item) => (
              <div key={item.id} className="mb-2">
                <p><b>{item.title}</b></p>
                <p>₹{item.price}</p>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
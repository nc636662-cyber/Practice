import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchContext";
import { CartContext } from "./CartContext";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtowish } from "../slice/cartslice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Product = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(10);
  const [loading, setloading] = useState(true);

  const { search } = useContext(SearchContext);
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProduct(data.products);
      setloading(false);
    };
    fetchProduct();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40">
        <AiOutlineLoading3Quarters className="text-4xl text-orange-600 animate-spin" />
      </div>
    );

  const filterdata = product.filter((item) =>
    `${item.title} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleClick = (item) => {
    dispatch(addtowish(item));
  };

  return (
    <div className="px-4 md:px-10 py-8">

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-6">
        Shop Smart Live Better
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {filterdata.slice(0, visible).map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-4 shadow hover:shadow-md transition"
          >
            <h4 className="font-semibold mb-2">{item.title}</h4>

            <Link to={`/detail/${item.id}`}>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-40 w-full object-contain mb-3"
              />
            </Link>

            <p className="text-sm mb-2">
              {item.description.slice(0, 50)}...
            </p>

            <p className="flex items-center gap-1 text-lg font-medium">
              Price: <FaDollarSign /> {item.price}
            </p>

            <div className="flex gap-2 mt-3">
              <button
                className="flex-1 bg-orange-500 text-white py-1 rounded hover:bg-orange-600"
                onClick={() => {
                  addToCart(item);
                  alert("add item");
                }}
              >
                Add to Cart
              </button>

              <button
                className="flex-1 bg-gray-200 py-1 rounded hover:bg-gray-300"
                onClick={() => handleClick(item)}
              >
                Wish
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More */}
      {visible < filterdata.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisible(visible + 4)}
            className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
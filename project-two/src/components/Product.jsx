import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchContext";
import { CartContext } from "./CartContext";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtowish } from "../slice/cartslice";


const Product = () => {
  const dispatch=useDispatch()
  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(10);

  const { search } = useContext(SearchContext);
    const{cart,setCart}=useContext(CartContext);
    const addToCart=(item)=>{
    setCart([...cart,item]);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProduct(data.products);
    };
    fetchProduct();
  }, []);

  const filterdata = product.filter((item) =>
    `${item.title} ${item.description}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleClick=(item)=>{
dispatch(addtowish(item))
  } 

  return (
    <div className="product-container">
      <h2 className="title">Shop Smart Live Better</h2>

      {filterdata.slice(0, visible).map((item) => (
        <div className="product-card" key={item.id}>
          <h4>{item.title}</h4>

          <Link to={`/detail/${item.id}`}>
            <img src={item.thumbnail} alt={item.title} />
          </Link>

          <p>{item.description.slice(0, 50)}...</p>
         <p className="price flex items-center gap-1 text-lg font-medium">Price: <FaDollarSign /> {item.price}
         </p>


         <button
            className="cart-btn"
            onClick={() =>{ addToCart(item);alert("add item")}}
          >
            Add to Cart
          </button>
          <button onClick={() => handleClick(item)}>Wish</button>
        </div>
      ))}

      {visible < filterdata.length && (
        <button onClick={() => setVisible(visible + 4)}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Product;
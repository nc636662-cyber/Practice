import React, { useContext, useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../SearchContext";
import { CartContext } from "./CartContext";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtowish } from "../slice/cartslice";
import { AiOutlineLoading3Quarters } from "react-icons/ai";



const Product = () => {
  const dispatch=useDispatch()
  const [product, setProduct] = useState([]);
  const [visible, setVisible] = useState(10);
  const [loading,setloading]=useState(true)

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
     setloading(false)
    };
    fetchProduct();
  }, []);
  if(loading) return <p className="flex justify-center items-center h-40"><AiOutlineLoading3Quarters  className="text-4xl text-orange-600 animate-spin"/>
</p>

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
{/* console.log("hello") */}
          <Link to={`/detail/${item.id}`}>
            <img src={item.thumbnail} alt={item.title} />
          </Link>

          <p>{item.description.slice(0, 50)}...</p>
         <p className="price flex items-center gap-1 text-lg font-medium">Price: <FaDollarSign /> {item.price}
         </p>

          <div className="btn-container">
         <button
            className="cart-btn"
            onClick={() =>{ addToCart(item);alert("add item")}}
          >
            Add to Cart
          </button>
          <button 
          className="wish-btn"
          onClick={() => handleClick(item)}>Wish</button>
        </div>
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
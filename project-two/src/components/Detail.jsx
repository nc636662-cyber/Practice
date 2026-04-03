import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext } from "react";
import { CartContext } from "./CartContext";
import './Detail.css'
import { AiFillFastBackward } from "react-icons/ai";
import { AiFillFastForward } from "react-icons/ai";


const Detail = () => {
  const { id } = useParams()
  console.log("iddddd",typeof(id))
  const navigate=useNavigate()

  const [product, setProduct] = useState(null)
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const{cart,setCart}=useContext(CartContext);
  const addToCart=(item)=>{
    setCart([...cart,item]);
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        console.log("dattaaaa",data)

        setProduct(data)
      } catch (error) {
        console.log("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  },[id])

  if (loading) {
    return <h2 className="loading">Loading...</h2>
  }

  return (
    <div className="detail-container">
    
      <div className="detail-card">

        <img src={product.thumbnail} alt={product.title} />

        <div className="detail-content">
          <h2>{product.title}</h2>
          <p className="desc">{product.description}</p>
          <p className="price">Price: ${product.price}</p>

          {/* <div className="quantity">
            <button onClick={() => count > 1 && setCount(count - 1)}>-</button>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div> */}

          <button
            className="cart-btn"
            onClick={() =>{ addToCart(product); navigate("/cart"); alert("add item")}}
          >Add to Cart
          </button>

          <div className="nav-buttons">
          <button onClick={() => navigate(`/detail/${id - 1}`)}> <AiFillFastBackward /></button>
          <button onClick={() => navigate(`/detail/${Number(id) + 1}`)}><AiFillFastForward /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
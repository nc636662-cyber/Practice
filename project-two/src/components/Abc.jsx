import React, { useEffect, useState } from 'react'

const Abc = () => {
    const [data,setdata]=useState()
    const [loading,setloading]=useState(true)
    const [count,setCount] =useState(0)
    
    useEffect(()=>{
        const res=async()=>{
            const rsss=await fetch("https://dummyjson.com/products")
            const result=await rsss.json()
            setdata(result.products)
            setloading(false)
        }
        res()

    },[])
    if(loading) return <p>loading .........</p>
  return (
    <div>
      {
        data.map((item)=>(
            <div key={item.id}>
                <img src={item.thumbnail} alt="" />
            </div>
        ))
      }
      <button onClick={()=>setCount(count+1)}> Add +2</button>
      {count}
    </div>
  )
}

export default Abc

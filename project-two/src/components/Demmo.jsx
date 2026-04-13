import React, {  useState } from 'react'

const Demmo = () => {
    const[count,setCount]=useState(0)
    const[todos,setTodos]=useState("off")
    const[text,setText]=useState("")
    const[save,setSave]=useState([])
    const handleDelete =(index)=>{
        const newSave=save.filter((item,i)=>i!==index)
        setSave(newSave)
    }
    const[input,setInput]=useState(()=>{
    return  localStorage.getItem("name")||""
    })
    const handleInputSave=()=>{
        localStorage.setItem("name",input);
    }
    const[name,setName]=useState(()=>{
        localStorage.getItem("username")||""
    })
    const[gmail,setGmail]=useState(()=>{
        localStorage.getItem("gmail")||""
    })
    const [number,setNumber]=useState(()=>{
        localStorage.getItem("number")||""
    })
    const handleSubmit=()=>{
        localStorage.setItem("username",name)
        localStorage.setItem("gmail",gmail)
        localStorage.setItem("number",number)
    }
    const handleRemove=()=>{
        localStorage.removeItem("username")
        localStorage.removeItem("gmail")
        localStorage.removeItem("number")
    }
  return (
    <div>
         <h1>Counter{count}</h1>
      <button onClick={()=>setCount(prev=>prev+1)}>click+</button>
      <button onClick={()=>setCount(0)}>reset</button>
     <br/>
      <button onClick={()=>setTodos(todos=="off"?"on":"off")}>click {todos}</button><br/>
    <input 
    type='text'
    placeholder='search'
    value={text}
    onChange={(e)=>setText(e.target.value)}/>{text}
    <button onClick={()=>setSave([...save,text])}>Add</button><br/>
    <input 
    type='text'
    placeholder='type'
    value={input}
    onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={handleInputSave}></button><br/>
<input 
type='text'
placeholder='username'
value={name}
onChange={(e)=>setName(e.target.value)}/><br/>
<input 
type='text'
placeholder='gmail'
value={gmail}
onChange={(e)=>setGmail(e.target.value)}/><br/>
<input
 type='text'
placeholder='PH.'
value={number}
onChange={(e)=>setNumber(e.target.value)}/>
<button onClick={handleSubmit}>Submit</button>//
<button onClick={handleRemove}>reset</button>

    {save.map((item,index)=>(
        <div key={index}>
            <h1>{item}</h1>
            <button onClick={()=>handleDelete(index)}>Delete</button>
            </div>
    ))}
    </div>
  )
}

export default Demmo

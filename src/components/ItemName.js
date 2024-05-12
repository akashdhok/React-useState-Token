import React , {useState}  from 'react'
import './Name.css'

export default function Item(props) {
 const[title , setTitle] = useState(props.title)
 function handler(){
  setTitle("Your cart is empty")
  console.log("your item successfully added to the cart")
 }
  return (
   <div className='box'>
     <div className='item'>{title}</div>
    <button onClick={handler} className='btn'>Add to Cart</button>
   </div>
)}

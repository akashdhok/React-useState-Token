import React , {useState}  from 'react'
import './ProductForm.css'

export default function ProductForm(props) {
const[newTitle , setTitle] = useState('')
const[newDate , setDate] = useState('')
 function titlehandler(event){
   setTitle(event.target.value)
 }
 function dateHandler(event){
    setDate(event.target.value)
 }
 function submitHandler(event){
    event.preventDefault()
    
   const productDetails ={
    title:newTitle,
    date:newDate
   }
   console.log(productDetails)
   setTitle('')
   setDate('')
   props.onSave(productDetails)
 }
  return (
       <form action=""  onSubmit={submitHandler}>
         <div className='newProduct_title'>
            <label htmlFor="">Title:-</label>
            <input type="text" value={newTitle}  onChange={titlehandler}></input>
        </div>
        <div className='newProduct_date'>
            <label htmlFor="">Date:-</label>
            <input type="date" min='2023-01-01' max='2023-12-12' value={newDate} onChange={dateHandler}/>
        </div>
        <div className='newProduct_btn'>
            <button type='Submit'>Add Product</button>
        </div>
       </form>
    
  )
}

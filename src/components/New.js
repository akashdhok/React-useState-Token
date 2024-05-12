import React from 'react'
import ProductForm from './ProductForm'
import './New.css'
export default function New(props) {
    function saveProduct(product){
        console.log("i m inside the new.js")
        props.akash(product)
    }
  return (
    <div className='new-product'>
        <ProductForm onSave = {saveProduct}/>
    </div>
  )
}
    
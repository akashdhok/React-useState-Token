import React from 'react'
import Date from './Date'
import ItemName from './ItemName'
import './Card.css'

export default function Card() {
  return (
    <div >
        <div className='Card'>
     <ItemName title = "Akash"></ItemName>
    <Date date = "23" month = " April" year = " 2002"></Date>
    <ItemName title = "Adarsh"></ItemName>
    <Date date = "18" month = " May" year = " 1999"></Date>
    <ItemName title = "Raksha"></ItemName>
    <Date date = "28" month = " August " year = "1996"></Date>
    <ItemName title = "Priyanka"></ItemName>
    <Date date = "15" month = " July " year = "1992"></Date>
        
        </div>

    </div>
  )
}

import React from 'react'
import './Date.css'

export default function Date(props) {
    const date = props.date;
    const month = props.month;
    const year = props.year
   
  return (
    <div className='date'>
        <span>{date}</span>
        <span>{month}</span>
        <span>{year}</span>
       
    </div>
  )
}

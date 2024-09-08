import React from 'react'

function Card(props) {
  return (
    <div className='card-root' key={props.id}>
        <img src={props.imageUrl} alt="" />
        <div className='card-details'>
            <p>{props.name}</p>
            <p className='cost'> ${props.price} </p>
        </div>
        <div className={`card-${props.type}`}>
            {props.type }
        </div>  
    </div>
  )
}

export default Card
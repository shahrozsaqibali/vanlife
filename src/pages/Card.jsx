import React from 'react'

function Card() {
  return (
    <div className='card-root'>
        <img src="https://assets.scrimba.com/advanced-react/react-router/beach-bum.png" alt="" />
        <div className='card-details'>
            <p>Beach Bum</p>
            <p className='cost'> $80 </p>
        </div>
        <div className='card-fitler-flag'>
            Rugged
        </div>  
    </div>
  )
}

export default Card
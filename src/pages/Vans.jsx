import React from 'react'
import Card from "./Card"

function Vans() {
  return (
      <div className='Vans-root'>
        <h2>Explore our van options</h2>
        <div className='vans-filter'>
              <div className='vans-filter-item'>Simple</div>
              <div className='vans-filter-item'>Luxury</div>
              <div className='vans-filter-item'>Rugged</div>
              <p>Clear filter</p>
        </div>

        <div className='vans-list'>
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
           <Card />
        </div>
      </div>
  )
}

export default Vans
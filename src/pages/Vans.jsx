import React, { useEffect, useState } from 'react'
import Card from "./Card"
import {Link} from "react-router-dom"

function Vans() {

  const [vansList , setVanlist] = useState([""])

 

  function getVansList(){
    fetch("/api/vans")
    .then(res => res.json()) // Convert the response to JSON
    .then(data => {
        setVanlist(data.vans); // Update the state with the list of vans
    })
    .catch(error => console.error("Error fetching vans:", error));
  }

  useEffect(getVansList,[])



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
           {vansList ? vansList.map(van => {
              return ( <Link to={`/vans/${van.id}`}> <Card id={van.id} imageUrl={van.imageUrl} name={van.name} price={van.price} type={van.type} /> </Link>)
           }): "Loading"}
        </div>

      </div>
  )
}

export default Vans
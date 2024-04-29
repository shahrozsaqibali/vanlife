import React from "react"
import {Link} from "react-router-dom"

export default function Header(){
    return (
        <div className="header-root">
            
            <div>
                <Link className="header-root-title"  to="/">
                    <h2 >#VANLIFE-Yaa</h2>
                </Link>
            </div>
            
            <div className="header-root-nav">
                <Link  className="header-root-link" to="About" >About</Link>
                <Link  className="header-root-link" to="/vans" >Vans</Link>
            </div>
        
        </div>
    )
}
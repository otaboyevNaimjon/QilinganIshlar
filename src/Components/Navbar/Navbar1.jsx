import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar1() {
  return (
    <div>
         <nav className='navbar'>
                    <ul className='nav'>
                        <li style={{ marginLeft: "-50px" }} ><img style={{ width: "70px", height: "70px", borderRadius: "50%" }} src="./images/photo_2022-06-14_11-41-26.jpg" alt="" /></li>
                       <Link to={'/home'} style={{textDecoration:"none"}}> <li><h3 style={{ fontSize: "15px" }} className="li">Home</h3></li></Link>
                        <Link to={'/about'} style={{textDecoration:"none"}}><li><h3 style={{ fontSize: "15px" }} className="li">About</h3></li></Link>
                        <a href="#footer" style={{ textDecoration: "none" }}><li><h3 style={{ fontSize: "15px" }} className="li" >Contact</h3></li></a>
                        <Link to={'/doctor'} style={{ textDecoration: "none" }}>
                            <li><h3 style={{ fontSize: "15px" }} className="li">Doctors</h3></li>
                        </Link>
                        <Link to={'/loginpages'} style={{ textDecoration: "none" }}>
                            <li><h3 style={{ fontSize: "15px" }} className="li">Log in </h3></li>
                        </Link>
                    </ul>
                </nav>
    </div>
  )
}

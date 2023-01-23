import React, { useState } from 'react'
import "../styles/navbar.css"
import { logo, menu, close } from '../assets'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='navbar'>
      <img src={logo} alt="" className='logo' />
      <ul className={toggle ? "navbar-list sidebar" : 'navbar-list'}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Clients</a></li>
      </ul>
      <div className="ok">
        <img src={toggle ? close : menu} alt=""
          className='toggle-menu'
          onClick={() => setToggle(!toggle)}
        />
      </div>
    </div>
  )
}

export default Navbar
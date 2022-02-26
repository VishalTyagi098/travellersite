import './Navbar.css'
import logo from '../../images/logo.png'
import search from '../../images/search.png'

import React from "react";

function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-list-item logo"><a href="/"><img src={logo} alt="" /></a>
        <a href='/'>TravellerSite</a>
        </li>
        <li className="navbar-list-item"><a href="/">Home</a></li>
        <li className="navbar-list-item"><a href="/">About us</a></li>
        <li className="navbar-list-item"><a href="/">Contact</a></li>
        <li className="navbar-list-item search-bar">
          <input type="text" placeholder="Search.." className='navbar-search'></input>
          <button type="submit" className='navbar-search-btn'><img src={search} alt="" /></button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

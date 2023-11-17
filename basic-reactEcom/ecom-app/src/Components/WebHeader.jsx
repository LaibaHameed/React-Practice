import React from 'react'
import "../CSS/Header.css"
import { NavLink } from 'react-router-dom'

const WebHeader = () => {
  return (
    <>
  <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
    <div className="nav-title">
      JoGeek
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
    <NavLink className="alink" to= '/'>Home</NavLink>
    <NavLink className="alink" to= '/products'>Products</NavLink>
    <NavLink className="alink" to= '/cart'>Cart</NavLink>
    <NavLink className="alink" to= '/check-out'>Check-out</NavLink>
  </div>
</div>
    </>
  )
}

export default WebHeader
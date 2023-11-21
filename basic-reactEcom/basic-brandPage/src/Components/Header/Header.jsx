import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <section className='header'>
        <span className='logo'>
        Nike
        </span>
        <div className='tabs'>
            <NavLink className='tab' to="/">Home</NavLink>
            <NavLink className='tab' to="/">Location</NavLink>
            <NavLink className='tab' to="/">About</NavLink>
            <NavLink className='tab' to="/">Contact</NavLink>
        </div>
        <div className='login'>
            <button className='btn'>Login</button>
        </div>

    </section>
  )
}

export default Header
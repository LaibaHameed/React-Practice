import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Button from '../Button/Button'

const Header = () => {
  return (
    <section className={`${styles.header}`}>
        <span className={`${styles.logo}`}>
        Nike
        </span>
        <div className={`${styles.tabs}`}>
            <NavLink className={`${styles.tab}`} to="/">Home</NavLink>
            <NavLink className={`${styles.tab}`} to="/">Location</NavLink>
            <NavLink className={`${styles.tab}`} to="/">About</NavLink>
            <NavLink className={`${styles.tab}`} to="/">Contact</NavLink>
        </div>
        <div className={`${styles.login}`}>
            <Button text="Login"/>
        </div>

    </section>
  )
}

export default Header
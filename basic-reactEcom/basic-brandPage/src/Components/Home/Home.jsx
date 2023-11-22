import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <section className="home">
      <div className="content">
        <h3 className="shoe">
        YOUR FEET
        DESERVE <br/>
        THE BEST</h3>
        <p className='para'>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
        <div className='btns'>
        <Link to="/" className="btn">
          Buy Now
        </Link>
        <Link to="/" className="btn">
          Category
        </Link>
        </div>
        <div className='imgs'>
        also available on 
        <img
              src="amazon.png"
              className="icon"
              alt="amazon"
        /> 
        <img
              src="Flipkart.jpeg"
              className="icon"
              alt="flipkart"
        />
        </div>
      </div>

      <div className="image">
        <img
          src="hero-image.png"
          // src="shoes.png"
          className="main-img"
          alt=""
        />
      </div>
  </section>
  )
}

export default Home
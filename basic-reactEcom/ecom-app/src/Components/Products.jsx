import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Products.css";
import { UseProductContext } from "../Contexts/ProductContext";

const {products} = UseProductContext();
const Products = () => {
  return (
    <>
    <h2 className="title">Products</h2>
      <main className="container">
      {products.map((product)=>{
        <section className="card card-blue" key={product.id}>
          <div className="product-image">
            <img
              src={product.image}
              alt="OFF-white Blue Edition"
              draggable="false"
            />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="price">${product.price}</div>
          </div>
          <div className="btn">
            <button className="buy-btn">Buy Now</button>
            <button className="fav">
              <svg
                className="svg"
                id="i-star"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
              </svg>
            </button>
          </div>
        </section>
      })}
      </main>
    </>
  );
};

export default Products;

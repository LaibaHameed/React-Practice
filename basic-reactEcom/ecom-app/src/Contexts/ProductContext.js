// ProductContext.js
import React, { createContext, useContext, useState } from "react";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      description: "Air Jordan 1 Retro High Off-White - UNC sneakers",
      price: 20.99,
      image: "https://i.ibb.co/0JKpmgd/blue.png",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description 2",
      price: 30.49,
      image: "https://i.ibb.co/cNWqxGx/red.png",
    }
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const UseProductContext = () => {
  const context = useContext(ProductContext);
  return context;
};


import React from "react";
import styles from "./Home.module.css";
import Button from "../Button/Button";
import { FaOpencart } from "react-icons/fa";

const Home = () => {
  return (
    <section className={`${styles.home}`}>
      <div className={`${styles.content}`}>
        <h3 className={`${styles.shoe}`}>
          YOUR FEET DESERVE <br />
          THE BEST
        </h3>
        <p className={`${styles.para}`}>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className={`${styles.btns}`}>
          <Button
            icon={<FaOpencart fontSize="20px" />}
            text="Buy Now"
          />
          <Button text="Category" isOutline={true} />
        </div>
        <div className={`${styles.imgs}`}>
          also available on
          <img
            src="/Images/amazon.png"
            className={`${styles.icon}`}
            alt="amazon"
          />
          <img
            src="/Images/Flipkart.jpeg"
            className={`${styles.icon}`}
            alt="flipkart"
          />
        </div>
      </div>

      <div className={`${styles.image}`}>
        <img
          src="/Images/hero-image.png"
          // src="shoes.png"
          className={`${styles.mainImg}`}
          alt=""
        />
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import styles from "./Button.module.css";
import { Link } from "react-router-dom";

const Button = ({ isOutline, icon, text }) => {  //* we can also do in this way
  // const {isOutline, icon, text} = props;      //*destructuring */
  return (
    <div className={styles.div}>
      <Link to="/" className={isOutline ? styles.btn2 : styles.btn}>
        {text}
        {icon}
      </Link>
    </div>
  );
};

export default Button;

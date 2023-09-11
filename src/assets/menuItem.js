import React from "react";
import {Link} from "react-router-dom";
import styles from "./menuItem.module.css"
const brands = [
    'آدیداس', 'جردن', 'نایک', 'بالنسیاگا', 'آسیکس', 'ریبوک', 'مک کویین'
  ];

function MenuItem({isOpen}) {
  return (
    <ul className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}>
    {brands.map((brand, index) => (
      <li key={index} className={styles.menuItem}>
        <Link href={"/"}>{brand}</Link>
      </li>
    ))}
  </ul> 
  )
}

export default MenuItem

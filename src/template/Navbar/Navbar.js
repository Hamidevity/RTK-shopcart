import React from "react";

import {Link} from "react-router-dom"
import styles from "./Navbar.module.css"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi";
import MenuItem from "../../assets/menuItem";


function Navbar() { 
  const [dropdown, setDropdown] = useState(false);

  const toggleHandler = () => {
    setDropdown(!dropdown);
  };


  return (
    <>
    <hr/>
    <navbar className={styles.container}>
       <div className={styles.content}>

            <div> <Link to={'/'}>صفحه اصلی</Link></div>
            <div> <Link to={'/'}> کتونی مردانه</Link></div>
            <div> <Link to={'/'}> کتونی زنانه </Link></div>
            <div> <Link to={'/'}> کتونی ست </Link></div>
            <div> <Link to={'/'}> کتونی رانینگ و پیاده روی </Link></div>
            <div> <Link to={'/'}> سایز پا </Link></div>

       </div>
       <div>
          <button className={styles.button} onClick={toggleHandler} type="button">
            برندها
            <BiChevronDown className={styles.downIcon}/>
          </button>
          <MenuItem isOpen={dropdown} />
        </div>  
        
      </navbar>
      
      </>
  )
}

export default Navbar
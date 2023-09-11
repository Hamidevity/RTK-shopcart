import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import styles from "./product.module.css"

import { shorten ,isInCart , quantityCount} from '../../components/helper/function';

import { addItem, decrease, increase, removeItem } from './cartsSlice';

import {BsTrash3} from "react-icons/bs"
const Product = ({productDate}) => {
  const state = useSelector(state => state.carts);
  const dispatch = useDispatch();
  
  return (
    <div className={styles.container} >
    <img className={styles.cardImage} src={productDate.image} alt="product" />
    <h3>{shorten(productDate.title)}</h3>
    <p>{`${productDate.price} $`}</p>
    <div className={styles.linkContainer}>
        <Link to={`/products/${productDate.id}`}>Details</Link>
        <div className={styles.buttonContainer}>
            {quantityCount(state, productDate.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch(removeItem(productDate))}><img src={<BsTrash3/>} alt="trash" /></button>}
            {quantityCount(state, productDate.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch(decrease(productDate))}>-</button>}
            {quantityCount(state, productDate.id) > 0 && <span className={styles.counter}>{quantityCount(state, productDate.id)}</span>}
            {
                isInCart(state, productDate.id) ?
                <button className={styles.smallButton} onClick={() => dispatch(increase(productDate))}>+</button> :
                <button onClick={() => dispatch(addItem(productDate))}>Add to Cart</button>
            }
        </div>
    </div>
</div>
  )
}

export default Product

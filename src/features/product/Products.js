import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productsSlice';
import Product from './Product';
import styles from "./products.module.css"

function Products() {
  const products = useSelector((state) => state.products)
   const dispatch = useDispatch();
   console.log(products)
   useEffect(() => {
    dispatch(fetchProducts())
   },[])
  return (
    <div className={styles.container}>
      {products.loading ? <h2>loading...</h2> : null}
      {products.products.map(product => 
      <Product  productDate = {product}
                key = {product.id}
      />)}
    </div>
  )
}
export default Products
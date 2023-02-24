import React from 'react'
import './product.css'

const Product = (props) => {

    const {category, img, name, price, quantity, ratings, ratingsCount, seller, shipping, stock} = props.product;
  return (
    <div className='product-card'>
    <img className='card-img' src={img} alt="" />

    </div>
  )
}

export default Product
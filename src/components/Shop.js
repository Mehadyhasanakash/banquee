import React, { useEffect, useState } from 'react'
import Product from './product/Product';
import './shop.css'

const Shop = () => {

  const [products, setProducts] = useState([]);
  useEffect( () =>{
    fetch('product.json')
    .then(res => res.json())
    .then(data => setProducts(data))
  },[])





  return (
    <div className='shop'>
        <div className="shop-container">
            <div className="product-container">
              {
                products.map((product) => <Product key={product.id} product={product}/>)
              }
            </div>
        </div>
        <div className="card-container">
            <h1>Card item</h1>
        </div>
    </div>
  )
}

export default Shop
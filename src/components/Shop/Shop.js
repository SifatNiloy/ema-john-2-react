import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        console.log(product)
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                <h3>products: {products.length} </h3>
                {
                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>order summary: </h2>
                <h5>Items Ordered: </h5>
            </div>

        </div>
    );
};

export default Shop;
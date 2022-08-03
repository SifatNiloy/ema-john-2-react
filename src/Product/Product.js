import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, price, stock, shipping, seller } = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className='product-name'>{name}</h2>
                <h3>{price}</h3>
                <p>seller: {seller}</p>
                <p>Price: {price}</p>
            </div>

        </div>
    );
};

export default Product;
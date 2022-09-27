import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, price} = props.product;
    return (
        <div className='product'>
            <h2>{name}</h2>
            <h4>Price: ${price}</h4>
            <button>Add to cart</button>
        </div>
    );
};

export default Product;
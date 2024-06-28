// src/components/ProductDetail.jsx
import React, { useEffect, useState } from 'react';
import { getProduct } from '../api';
import './ProductDetail.css';

const ProductDetail = ({ productId, onAddToCart }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const product = await getProduct(productId);
            setProduct(product);
        };
        fetchProduct();
    }, [productId]);

    if (!product) return <div>Loading...</div>;

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} />
            <div>
                <h2>{product.title}</h2>
                <p>{product.price} USD</p>
                <p>{product.description}</p>
                <button onClick={() => onAddToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;


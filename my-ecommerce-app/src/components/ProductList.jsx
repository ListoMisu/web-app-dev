// src/components/ProductList.jsx
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';
import './ProductList.css';

const ProductList = ({ onProductSelect }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts();
            setProducts(products);
        };
        fetchProducts();
    }, []);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card" onClick={() => onProductSelect(product.id)}>
                    <img src={product.image} alt={product.title} />
                    <h2>{product.title}</h2>
                    <p>{product.price} USD</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;


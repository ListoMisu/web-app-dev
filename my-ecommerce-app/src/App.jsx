// src/App.jsx
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';

const App = () => {
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <div className="app">
            <div className="product-section">
                <ProductList onProductSelect={setSelectedProductId} />
                {selectedProductId && (
                    <ProductDetail
                        productId={selectedProductId}
                        onAddToCart={handleAddToCart}
                    />
                )}
            </div>
            <Cart cart={cart} onRemoveFromCart={handleRemoveFromCart} />
        </div>
    );
};

export default App;


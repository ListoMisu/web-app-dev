// src/components/Cart.jsx
import React from 'react';
import './Cart.css';

const Cart = ({ cart, onRemoveFromCart }) => {
    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <div>
                        <h3>{item.title}</h3>
                        <p>{item.price} USD</p>
                        <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Cart;


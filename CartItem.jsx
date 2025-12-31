cart_item_content = """import React from 'react';
import { useSelector } from 'react-redux';

const CartItem = () => {
    const cart = useSelector(state => state.cart.cart);
    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            {cart.map(item => (
                <div key={item.id}>
                    <h4>{item.name}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ${item.price}</p>
                </div>
            ))}
            <h3>Total: ${totalAmount}</h3>
        </div>
    );
};

export default CartItem;
"""
with open(f"{project_name}/CartItem.jsx", "w") as f:
    f.write(cart_item_content)

print(f"Project '{project_name}' structure created successfully!")

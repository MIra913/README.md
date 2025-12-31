product_list_content = """import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const products = [
    { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 25 },
    { id: 2, name: 'Snake Plant', category: 'Indoor', price: 15 },
    { id: 3, name: 'Monstera', category: 'Indoor', price: 30 },
    { id: 4, name: 'Rose', category: 'Outdoor', price: 10 },
    { id: 5, name: 'Tulip', category: 'Outdoor', price: 12 },
    { id: 6, name: 'Lavender', category: 'Outdoor', price: 18 },
];

const ProductList = () => {
    const dispatch = useDispatch();
    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>Category: {product.category}</p>
                    <p>Price: ${product.price}</p>
                    <button onClick={() => dispatch(addItem(product))}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
"""
with open(f"{project_name}/ProductList.jsx", "w") as f:
    f.write(product_list_content)

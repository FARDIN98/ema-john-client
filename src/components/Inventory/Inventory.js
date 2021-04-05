import React from 'react';
import {Button} from 'react-bootstrap'






const Inventory = () => {
    const handleAddProduct = () => {
        const product = {}
        fetch('https://calm-depths-98163.herokuapp.com/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        } )    
    }
    return (
        <div>
            <form action="">
            <p><span>Name</span><input type="text"/></p>
            <p><span>Price</span><input type="text"/></p>
            <p><span>Quantity</span><input type="text"/></p>
            <p><span>Product Image</span><input type="file"/></p>
                <Button onClick={handleAddProduct} variant="warning">Add Product</Button>{' '}
            </form>
          
        </div>
    );
};

export default Inventory;
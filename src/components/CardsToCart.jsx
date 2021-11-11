import React, { useState, useEffect } from 'react';
import Counter from './../components/Counter';

const CardInCart = ({product, changetotalAmount}) => {

    const [cartAmount, setcartAmount] = useState(product.price);

    useEffect(()=> {
            changetotalAmount(cartAmount, product.id)
        },
        [cartAmount]

    )

    const handleDelete =()=>{
        const requestDeleteOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: null
        };
        const urlToCart = 'http://localhost:3001/cart/' + product.id.toString();
        fetch(urlToCart, requestDeleteOptions)
            .catch(err => console.error('There was an error!', err))
            .then(()=>{window.location.href = "http://localhost:3000/CartView"})
        const urlToProduct = 'http://localhost:3001/products/' + product.id.toString();
        const requestPuttOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...product, "inCart": false})
        };
        fetch(urlToProduct, requestPuttOptions)
            .catch(err => console.error('There was an error!', err))
    };

    return (
        <div className='card'>
            <div>
                <h3>Name: {product.title}</h3>
            </div>
            <div>
                Price: {product.price}
            </div>
            <div>
                CardAmount
                {cartAmount}
                </div>
            <div>
                description: {product.description}
            </div>
                <Counter product = {product} changeAmount = {(amount)=>setcartAmount(amount)}/>
            <div>
                <button style={{margin: "8px", backgroundColor: "grey"}} onClick={handleDelete}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CardInCart;
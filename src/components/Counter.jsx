import React, { useState, useEffect } from "react";

function Counter({product, changeAmount}) {

    const [count, setCount] = useState(product.quantity);

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
        changeAmount(count * product.price)
    };

    const handleDecrement = () => {
        setCount(prevCount => prevCount > 1 ? prevCount - 1 : 1);
        changeAmount(count * product.price)
    };


    useEffect(() => {
        const fetchData = (count) => {
            const requestPutOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({...product, "quantity": count})
            };
            const urlToCart = 'http://localhost:3001/cart/' + product.id.toString();
            fetch(urlToCart, requestPutOptions)
                .catch(err => console.error('There was an error!', err))
        }
        fetchData(count)
    }, [count]);

    return (
        <div>
            <div>
                <button style={{margin: "8px", backgroundColor: "grey"}} onClick={handleDecrement}>-</button>
                <button style={{margin: "8px", backgroundColor: "grey"}} onClick={handleIncrement}>+</button>
                <h5>Count is {count}</h5>
            </div>
        </div>
    );
}

export default Counter;
import React, {useState, useEffect} from 'react';
import ProductsInCart from './../components/ProductsInCart';
import TotalAmount from './../components/TotalAmount'


const CartView = () => {
    const [amount, setAmount] = useState([]);
    return (
        <div className={'App-body'}>
            <div style={{width: '100%'}}>
                <TotalAmount amount={amount}/>
            </div>
            <ProductsInCart changeAmount={(amount) => setAmount(amount)}/>
        </div>
    )
}

export default CartView;
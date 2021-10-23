import React, { useState, useEffect } from 'react';
import ProductsInCart from './../components/ProductsInCart';
import TotalAmount from './../components/TotalAmount'


const CartView = ()=> {
    const [amount, setAmount] = useState([]);
    return (
        <div className={'App-body'}>
            <ProductsInCart changeAmount={(amount)=>setAmount(amount)}/>
            {/*<TotalAmount productsInCart = {productsInCart}/>*/}
        </div>
    )
}

export default CartView;
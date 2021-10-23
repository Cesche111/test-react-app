import React, { useState, useEffect } from 'react';
import CardsToCart from './../components/CardsToCart';

const ProductsInCart = ({changeProd, changeAmount }) => {
    const [productsInCart, setProductsInCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = () => {
            fetch('http://localhost:3001/cart')
                .then((response) => {
                    return response.json();
                })
                .catch(err => console.error('There was an error!', err))
                .then((data) => {
                    if(!cleanupFunction) {
                        setProductsInCart(data);
                        changeAmount(totalAmount)
                    }
                });
        };
        fetchData();

        return () => cleanupFunction = true;
    }, [totalAmount]);

    return (
        <div>
            <div className={'App-body'}>
                {productsInCart && productsInCart.map((item,i) => <CardsToCart key={item.id + i} product={item}
                                                                               changetotalAmount = {(amount)=>setTotalAmount(amount)}/>)}
            </div>

        </div>
    )
}
export default ProductsInCart;

import React, { useState, useEffect } from 'react';
import CardsToCart from './../components/CardsToCart';

const ProductsInCart = ({changeProd, changeAmount }) => {
    const [productsInCart, setProductsInCart] = useState([]);
    // const [totalAmount, setTotalAmount] = useState(0);
    const initialSums = productsInCart?.map(prod=>({[prod.id]: prod.price})) || {}
    console.log('init', initialSums)
    const [cardsSums, setCardsSums] = useState(initialSums);
    console.log(Object.values(cardsSums))
    const totalAmount = Object.values(cardsSums).reduce((sum, item) => item + sum, 0)
    // productsInCart.reduce((acc, p) => p.price * p.quantity, 0)

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
                                                                               changetotalAmount = {
                                                                                   (amount, id)=> setCardsSums((prev)=>({...prev, [id]: amount}))}/>)}
            </div>
            {/*{totalAmount}*/}
        </div>
    )
}
export default ProductsInCart;

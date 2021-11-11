import React from 'react';

const TotalAmount = ({amount}) => {
    // const calculateAmount = ()=> {
    //     if (productsInCart.length === 0) {
    //         return 0
    //     }
    //     return productsInCart.reduce((accumulator, currentValue, index, array)=> {
    //         return accumulator + currentValue.price * currentValue.quantity;
    //     }, 0);
    // };

    return (
            <div>
                Total amount: {amount}
            </div>
    )
}



export default TotalAmount;
import React from 'react';

const TotalAmount = ({productsInCart}) => {
    const calculateAmount = ()=> {
        if (productsInCart.length === 0) {
            return 0
        }
        return productsInCart.reduce((accumulator, currentValue, index, array)=> {
            return accumulator + currentValue.price * currentValue.quantity;
        }, 0);
    };

    return (
        <div>
            <div>
                Total amount: {calculateAmount()}
            </div>

        </div>
    )
}



export default TotalAmount;
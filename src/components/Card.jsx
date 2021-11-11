import React from 'react';
import Button from  './../components/Button';
import { Link } from 'react-router-dom';
import EditView from './../pages/EditView';

const Card = ({product, changeEdit}) => {
    const passProduct = (product)=> {
        return <EditView product = {product}/>
    }

    const handleEdit =(product)=>{
        passProduct(product)
    };

    const handleDelete =()=>{
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: null
            };
            const url = 'http://localhost:3001/products/' + product.id.toString();
            fetch(url, requestOptions)
                .catch(err => console.error('There was an error!', err))
                // .then(()=>{window.location.href = "http://localhost:3000/"})
    };

    const handleAddtoCart =()=>{

        const requestPosttOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...product, "inCart": true, "quantity": 1})
        };
        const requestPuttOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({...product, "inCart": true})
        };

        const urlToCart = 'http://localhost:3001/cart/';
        const urlToProduct = 'http://localhost:3001/products/' + product.id.toString();

        fetch(urlToCart, requestPosttOptions)
            .then(response => (console.log(response.json())))
            .catch(err => console.error('There was an error!', err))

        fetch(urlToProduct, requestPuttOptions)
            .then(response => (console.log(response.json())))
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
            <div >
                description: {product.description}
            </div>
            <div>
                <Link to={{pathname:'/EditView', product, product}} >
                    <button style={{margin: "8px", backgroundColor: "grey"}} onClick = {()=> handleEdit(product)}>Edit</button>
                </Link>
                <button style={{margin: "8px", backgroundColor: "grey"}} onClick={handleDelete}>
                    Delete
                </button>
                <Button style={{margin: "8px", backgroundColor: "grey"}} handler={handleAddtoCart} name={'Add to cart'} />
            </div>
        </div>
    )
}

export default Card;
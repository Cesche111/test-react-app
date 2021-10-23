import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CreateView = ()=> {
    const [product, setProduct] = useState({})
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    let newProduct = {
        "id": Date.now().toString().substr(2,9),
        "title": product,
        "description": description,
        "price": price,
        "inCart": false
    }
    const postNewProduct = (product)=> {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        };
        fetch('http://localhost:3001/products', requestOptions)
            .then(response => (console.log(response.json())))
            .catch(err => console.error('There was an error!', err))
    }

    const handleInputProduct =(e)=> setProduct(e.target.value);
    const handleInputPrice =(e)=> setPrice(e.target.value);
    const handleInputDescription =(e)=> setDescription(e.target.value);
    const handleSubmit =()=> {
        console.log(newProduct);
        postNewProduct(newProduct);
        window.location.href = "http://localhost:3000/MainView"
    }
    return (
        <div>
            <div >
                <form className='create-form'>
                    <label>New product:  </label>
                    <input type='text'
                           placeholder='Please enter the name'
                           onChange={handleInputProduct}

                    />

                    <label>Price:  </label>
                    <input type='text'
                           placeholder='Please enter the price'
                           onChange={handleInputPrice}
                    />

                    <label>Description:  </label>
                    <textarea id="txtArea" rows="10" cols="70"
                              placeholder='Please enter a description'
                              onChange={handleInputDescription}></textarea>


                </form>
                <button onClick={handleSubmit}>Save</button>
            </div>
        </div>
    )
}

export default CreateView;

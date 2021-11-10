import React from 'react';
import '../App.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const EditView = (props)=> {
    // console.log(props.location.product);
    const product = props.location.product;

        const [title, setTitle] = useState(product?.title || 'no')
        const [price, setPrice] = useState(product?.price || 0)
        const [description, setDescription] = useState(product?.description || '')

        let newProduct = {
            "id": Date.now().toString().substr(2,9),
            "title": title,
            "description": description,
            "price": price,
            "inCart": false
        }
        const postNewProduct = (product)=> {
            const requestOptions = {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({...product, title, description})
            };
            fetch('http://localhost:3001/products', requestOptions)
                .then(response => (console.log(response.json())))
                .catch(err => console.error('There was an error!', err))
        }

        const handleInputTitle =(e)=> setTitle(e.target.value);
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
                               value={title}
                               onChange={handleInputTitle}

                        />

                        <label>Price:  </label>
                        <input type='text'
                               placeholder='Please enter the price'
                               value={price}
                               onChange={handleInputPrice}
                        />

                        <label>Description:  </label>
                        <textarea id="txtArea" rows="10" cols="70"
                                  placeholder='Please enter a description'
                                  value={description}
                                  onChange={handleInputDescription}></textarea>


                    </form>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            </div>
        )


    return 'EditView'
}
export default EditView;
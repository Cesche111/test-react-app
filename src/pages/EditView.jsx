import React from 'react';
import '../App.css';
import {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

const EditView = (props) => {

    const product = props.location.product;
    const [title, setTitle] = useState(product?.title || 'no')
    const [price, setPrice] = useState(product?.price || 0)
    const [description, setDescription] = useState(product?.description || '')

    const history = useHistory();

    const patchEditProduct = (product) => {
        console.log(product.id)
        const requestOptions = {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...product, title, price, description})
        };
        fetch('http://localhost:3001/products/' + product.id.toString(), requestOptions)
            .then(history.push('/MainView'))
            .catch(err => console.error('There was an error!', err))
    }

    const handleInputTitle = (e) => setTitle(e.target.value);
    const handleInputPrice = (e) => setPrice(e.target.value);
    const handleInputDescription = (e) => setDescription(e.target.value);
    const handleSubmit = () => {
        patchEditProduct(product);
    }

    return (
        <div>
            <div>
                <form className='create-form'>
                    <label>New product: </label>
                    <input type='text'
                           placeholder='Please enter the name'
                           value={title}
                           onChange={handleInputTitle}

                    />

                    <label>Price: </label>
                    <input type='text'
                           placeholder='Please enter the price'
                           value={price}
                           onChange={handleInputPrice}
                    />

                    <label>Description: </label>
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
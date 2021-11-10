import React from 'react';
import {useState, useEffect} from 'react';
import Card from './../components/Card';

const Products = ({changeEdit}) => {
    const [products, setProducts] = useState([]);
    // const [editData, seteditData] = useState({});

    useEffect(() => {
        let cleanupFunction = false;
        const fetchData = () => {
            fetch('http://localhost:3001/products')
                .then((response) => {
                    return response.json();
                })
                .catch(err => console.error('There was an error!', err))
                .then((data) => {
                    if (!cleanupFunction) {
                        setProducts(data)
                    }
                    ;
                });
        };
        fetchData();
        return () => cleanupFunction = true;
    }, []);

    // useEffect(() => {
    //     products = products=>products, [products]
    // });


    const [searchValue, setSearchValue] = useState('');

    const filteredProducts = products.filter(product => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    if (products.length === 0) {
        return <p>Loading data...</p>;
    }
    return (
        <div>
            <div className='form'>
                <form>
                    <label htmlFor="search">Search: </label>
                    <input type='text'
                           id='search'
                           placeholder='Search your product...'
                           onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
            </div>

            <div className={'App-body'}>
                {filteredProducts && filteredProducts.map((item, i) => <Card key={item.id + i}
                                                                             product={item}
                    // changeEdit = {(data)=>seteditData(data)}
                />)}
            </div>
        </div>
    )
}

export default Products;
import React from 'react';
import Products from './../components/Products';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

const MainView = ({changeEdit})=> {
    const [editData, seteditData] = useState({});
    return (

        <div className={'App-body'}>
            <Link to='/CreateView'><button>Create new product</button></Link>
            <Products changeEdit = {(data)=>seteditData(data)}/>
        </div>

    )
}

export default MainView;
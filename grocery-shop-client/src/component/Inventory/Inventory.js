import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import './Invemtory.css';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/inventory/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[]);
    console.log(product);
    return (
        <div className='container'>
            
        </div>
    );
};

export default Inventory;
import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://gentle-plateau-17754.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return [products, setProducts];
};

export default useProducts;
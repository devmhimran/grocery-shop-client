import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://grocery-shop-server-devmhimran.vercel.app/inventory')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return [products, setProducts];
};

export default useProducts;
import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import useProducts from '../Hooks/useProducts';
import { RiEditBoxLine } from 'react-icons/ri';
import { BsTrash } from 'react-icons/bs';

const ManageItems = () => {
    const [products, setProducts] = useProducts([]);
    const navigate = useNavigate();
    const handleProductUpdate = (id) => {
        navigate(`/inventory/${id}`);
    }
    const handleDelete = (id) => {
        const proceed = window.confirm('Are your sure?');
        if (proceed) {

            const url = `https://gentle-plateau-17754.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remainingService = products.filter(products => products._id !== id);
                    setProducts(remainingService);
                    console.log(data);
                })
        }
    }
    return (
        <div className='my__item'>
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Product Quantity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(data =>
                                <tr key={data._id}>
                                    <td>{data.name}</td>
                                    <td>BDT {data.price} /-</td>
                                    <td>{data.quantity} {data.unit}</td>
                                    <td>
                                        <button className='btn btn-warning btn-sm mx-2' onClick={() => handleProductUpdate(data._id)}><RiEditBoxLine /></button>
                                        <button className='btn btn-danger btn-sm mx-2' onClick={() => handleDelete(data._id)}><BsTrash /></button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
                <div className="manage__Inventory__button d-flex justify-content-center">
                    <button className='grocery__btn__second' onClick={() => navigate('/additem')}>Add Item</button>
                </div>
            </div>
        </div>
    );
};

export default ManageItems;
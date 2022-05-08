import React, { useEffect } from 'react';
import './MyItem.css';
import { Table } from 'react-bootstrap';
import useProducts from '../Hooks/useProducts';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';

const MyItem = () => {
    const [products, setProducts] = useProducts([]);
    const [user] = useAuthState(auth);
    const userId = user?.uid;
    const productSaveData = products.filter(data => data.userId === userId);
    const navigate = useNavigate();
    const handleProductUpdate =(id) =>{
        navigate(`/inventory/${id}`);

    }
    const handleProductDelete = (id)=>{
        console.log(id);
        const proceed = window.confirm('Are your sure?');
        if (proceed) {

            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(data => data.userId !== userId);
                    setProducts(remaining);
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
                            productSaveData.map(data =>  
                            <tr>
                                <td>{data.name}</td>
                                <td>BDT {data.price} /-</td>
                                <td>{data.quantity} {data.unit}</td>
                                <td>
                                    <button className='btn btn-warning btn-sm mx-2' onClick={()=>handleProductUpdate(data._id)}>Update</button>    
                                    <button className='btn btn-danger btn-sm mx-2' onClick={()=>handleProductDelete(data._id)}>Delete</button>    
                                </td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyItem;
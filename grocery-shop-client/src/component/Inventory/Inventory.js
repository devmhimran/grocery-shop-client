import { async } from '@firebase/util';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useParams } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, image, shortDescription, price, quantity, unit, supplierName } = product;
    useEffect(() => {
        fetch(`https://grocery-shop-server-devmhimran.vercel.app/inventory/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, []);
    const preventMinus = (e) => {
        if (e.code === 'Minus') {
            e.preventDefault();
        }
    };
    const handleQuantityUpdate = (e) => {
        e.preventDefault();
        const inputQuantity = e.target.quantity.value;
        if (inputQuantity <= 0) {
            alert('Please Enter Some Quantity');
            e.target.reset();
        } else if (inputQuantity === '') {
            alert('Please Enter Some Quantity');
            e.target.reset()
        } else {
            const isProceed = window.confirm('Are You Sure Update Data?');
            if(isProceed){
                const dataQuantity = quantity;
                const totalQuantity = parseInt(inputQuantity) + parseInt(dataQuantity);
                const updateQuantity = { quantity: totalQuantity }
                fetch(`https://grocery-shop-server-devmhimran.vercel.app/update/${id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(updateQuantity)
                })
                    .then(res => res.json())
                    .then(data => {
                       
                       
                       if(isProceed){
                        
                        window.location.reload();
                       }
                    
                      
                        console.log(data);
                    })
                e.target.reset();
                // location.reload(); 
                toast.success('Successfully Updated!')
            }
            
        }

    }
    let quantityNow =  parseInt(quantity);
    const handleDeliver = (e) =>{
        // const quantityNow = quantity;
      e.preventDefault();
        if(quantityNow === 0){
            alert('Product Is out of Stock')
        }else{
            const isProceed = window.confirm('Are You Wanted To Deliver?');
            if(isProceed){
                quantityNow = quantityNow - 1;
                const newQuantity = { quantity: quantityNow }
              fetch(`https://grocery-shop-server-devmhimran.vercel.app/update/${id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newQuantity)
                })
                    .then(res => res.json())
                    .then(data => {
                       console.log(data)
                        window.location.reload();     
                    })
                    toast.success('Successfully Delivered!') 
            }
            
        }    
        
        
    }

    return (
        <div className='container single__product'>
            <div className="card single__product__card">
                <div className="card-body single__product__card__body">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="single__product__image__container">
                                <img className='single__product__image' src={image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                            <div className="product__detail__main">
                            <div className="product__detail">
                                <small>Id: {_id}</small>
                                <h1 className='single__product__name'>{name}</h1>
                                <p className='single__product__price'>BDT: {price}/-<small className='pricing__quantity'>Per {unit}</small></p>
                                <p className='single__product__quantity'>Stock Quantity: {quantity} {unit}</p>
                                <p className='single__product__supplierName'>{supplierName}</p>
                                <div className="inventory__update__button d-inline">
                                    <div className="product__update__main d-inline">
                                        <form onSubmit={handleQuantityUpdate}  className="d-inline">
                                            <input className='grocery__quantity' type="number" name="quantity" min="0" onKeyPress={preventMinus} placeholder="Qty"/>
                                            <button className='grocery__quantity__button mx-2'>Update</button>
                                        </form>
                                        <button className='grocery__quantity__button' onClick={handleDeliver}>Delivered</button>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product__description my-5">
                <div className="card">
                    <div className="card-body  p-5">
                        <h1>Product Short Description</h1>
                        <p className='single__product__description'>{shortDescription}</p>
                    </div>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Inventory;
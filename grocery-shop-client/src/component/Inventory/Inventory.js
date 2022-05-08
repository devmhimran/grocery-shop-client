import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import './Inventory.css';

const Inventory = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const { _id, name, image, shortDescription, price, quantity, unit, supplierName } = product;
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
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
        const inputQuantityParse  = parseInt(inputQuantity);
        const dataQuantity = quantity;
        const dataQuantityParse = parseInt(dataQuantity);
        const totalQuantity = inputQuantityParse + dataQuantityParse;
        // const productQuantity = quantityParse + inputQuantityParse;
        console.log(totalQuantity, typeof(totalQuantity))

        fetch(`http://localhost:5000/inventory/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(totalQuantity)
        })
            .then(res => res.json())
            .then(data => {
                alert('Are You Sure Update Data?')
                toast.success('Successfully toasted!')
                console.log(data);
            })
    }

    return (
        <div className='container single__product'>
            <div className="card single__product__card">
                <div className="card-body single__product__card__body">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="single__product__image__container">
                                <img className='single__product__image' src={image} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center">
                            <div className="product__detail">
                                <small>Id: {_id}</small>
                                <h1 className='single__product__name'>{name}</h1>
                                <p className='single__product__price'>BDT: {price}/-</p>
                                <p className='single__product__quantity'>Quantity: {quantity} {unit}</p>
                                <p className='single__product__supplierName'>{supplierName}</p>
                                <div className="inventory__update__button d-flex">
                                    <form onSubmit={handleQuantityUpdate}>
                                        <input className='grocery__quantity' type="number" name="quantity" min="0" onKeyPress={preventMinus} />
                                        <button className='grocery__quantity__button mx-2'>Update</button>
                                        <button className='grocery__quantity__button'>Delivered</button>
                                    </form>

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
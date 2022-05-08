import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const userId = user.uid;
    const handleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const shortDescription = e.target.shortDescription.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const unit = e.target.unit.value;
        const supplierName = e.target.supplierName.value;

        
        const addProductData = { name, image, shortDescription, price, quantity, unit, supplierName, userId };
        fetch('http://localhost:5000/inventory', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addProductData)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.target.reset();
        toast.success('Successfully Added!')
    }

    return (
        <div className='add__item__main'>
            <div className="container">
                <div className="card add__item__card">
                    <div className="card-body">
                        <h2>Add Item</h2>
                        <form onSubmit={handleAddItem}>
                            <div className="input__form">
                                <p className='py-2'>Product Name</p>
                                <input type="text" name="name" placeholder='Enter Product Name' />
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Image URL</p>
                                <input type="text" name="image" placeholder='Enter Image URL' />
                                <small className='text-danger'></small>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Short Description</p>
                                <textarea name="shortDescription" cols="42" rows="5"></textarea>
                                <small className='text-danger'></small>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Price</p>
                                <input type="number" name="price" placeholder='Enter Price' />
                                <small className='text-danger'></small>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Quantity</p>
                                <div className="input__form__main  d-flex">
                                    <input className='m-2' type="number" name="quantity" placeholder='Enter Quantity' />
                                    <select name="unit">
                                        <option value="Kg">Kg</option>
                                        <option value="Pcs">Pcs</option>
                                    </select>
                                </div>
                                <small className='text-danger'></small>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Supplier Name</p>
                                <input type="text" name="supplierName" placeholder='Enter Supplier Name' />
                                <small className='text-danger'></small>
                            </div>
                            <button className='login__btn mt-3'>Add</button>
                        </form>
                    </div>
                </div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
            </div>
        </div>
    );
};

export default AddItem;
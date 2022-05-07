import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import './AddItem.css';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const handleAddItem = (e) =>{
        console.log(e.target.supplierName.value);
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
                                <input type="email" name="name" placeholder='Enter Product Name' />
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Enter Image URL</p>
                                <input type="password" name="image" placeholder='Enter Image URL' />
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
                                <input type="number" name="quantity" placeholder='Enter Quantity' />
                                <small className='text-danger'></small>
                            </div>
                            <div className="input__form">
                                <p className='py-2'>Supplier Name</p>
                                <input type="text" name="supplierName" placeholder='Enter Supplier Name' value={user.displayName} disabled/>
                                <small className='text-danger'></small>
                            </div>
                            <button className='login__btn mt-3'>Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
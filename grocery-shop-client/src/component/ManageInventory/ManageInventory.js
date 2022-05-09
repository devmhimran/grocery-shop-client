import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../Hooks/useProducts';
import Products from '../Products/Products';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate();
    const handleProductDetail = (id) => {
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
        <div className="manage__Inventory">
                <h1 className='text-center'>Manage Inventory</h1>
                <div className="container">
                    <div className="row mt-5 g-3">
                        {
                            products.map(productData => 
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className='card product__card'>
                                    <div className="card-body mx-auto product__card__body mx-auto">
                                        <div className="product__image__container">
                                            <img className='product__image' src={productData.image} alt="" />
                                        </div>
                                        <div className="product__detail mt-4">
                                            <h4 className='product__name'>{productData.name}</h4>
                                            <div className="product__sub__description d-flex justify-content-between">
                                                <p className='product__price'>BDT {productData.price} /-</p>
                                                <p className='product__quantity'>{productData.quantity} {productData.unit}</p>
                                            </div>
                                            <p className='product__supplier my-2'>Supplier: {productData.supplierName}</p>
                                            <p className='product__description'>{productData.shortDescription.slice(0, 85)}</p>
                                        </div>
                                        <div className="product__button d-flex justify-content-between">
                                            <button className='product__btn mt-4' onClick={() => handleProductDetail(productData._id)}>Update</button>
                                            <button className='product__btn mt-4' onClick={() => handleDelete(productData._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            )
                        }

                    </div>
                </div>
            </div>
    );
};

export default ManageInventory;
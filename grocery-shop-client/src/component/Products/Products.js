import React from 'react';
import './Product.css';

const Products = (props) => {
    const { _id, name, image, shortDescription, price, quantity, unit, supplierName } = props.products;
    
    const handleProductDetail =(id) =>{
        console.log(id)
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className='card product__card'>
                <div className="card-body mx-auto product__card__body mx-auto">
                    <div className="product__image__container">
                        <img className='product__image' src={image} alt="" />
                    </div>
                    <div className="product__detail mt-4">
                        <h4 className='product__name'>{name}</h4>
                        <div className="product__sub__description d-flex justify-content-between">
                            <p className='product__price'>BDT {price} /-</p>
                            <p className='product__quantity'>{quantity} {unit}</p> 
                        </div>
                        <p className='product__supplier my-2'>Supplier: {supplierName}</p>
                        <p className='product__description'>{shortDescription.slice(0, 85)}</p>
                    </div>
                    <button className='product__btn mt-4' onClick={()=>handleProductDetail(_id)}>View Detail</button>
                </div>
            </div>
        </div>

    );
};

export default Products;
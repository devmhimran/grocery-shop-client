import React from 'react';
import './Product.css';

const Products = (props) => {
    const { _id, name, image, shortDescription, price, quantity, unit, supplierName } = props.products;
    console.log(props.products.name)
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className='card product__card'>
                <div className="card-body mx-auto product__card__body mx-auto">
                    <div className="product__image__container">
                        <img className='product__image' src={image} alt="" />
                    </div>
                    <div className="product__detail">

                        <h3>{name}</h3>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Products;
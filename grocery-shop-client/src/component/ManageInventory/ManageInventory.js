import React from 'react';
import useProducts from '../Hooks/useProducts';
import Products from '../Products/Products';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className="manage__Inventory">
                <h1 className='text-center'>Manage Inventory</h1>
                <div className="container">
                    <div className="row mt-5 g-3">
                        {
                            products.map(productData => <Products key={productData._id} products={productData}></Products>)
                        }

                    </div>
                </div>
            </div>
    );
};

export default ManageInventory;
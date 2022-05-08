import React from 'react';
import './Home.css';
import HeroImage from '../../assets/img/Grocery/grocery_hero01.png';
import { BsTruck } from 'react-icons/bs';
import { IoIosTimer } from 'react-icons/io';
import { BiSupport } from 'react-icons/bi';
import AboutUs from '../../assets/img/Grocery/grocery_about_us.png';
import useProducts from '../Hooks/useProducts';
import Products from '../Products/Products';

const Home = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='home__main'>
            <div className="hero__banner container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div className="hero__detail">
                            <h1>Welcome to Grocery Find your Favorite Food</h1>
                            <p>Food is the ultimate pacifier. I feel like I can forgive anyone after a scrumptious meal.</p>
                            <button className='grocery__btn mt-4'>Contact Us</button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className='hero__image' src={HeroImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="site__info container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="site__info__detail">
                            <div className='site__info__icon'>
                                <BsTruck></BsTruck>
                            </div>
                            <h3>Fast Delivery</h3>
                            <p>Within 2-3hrs after ordering</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="site__info__detail">
                            <div className='site__info__icon'>
                                <IoIosTimer></IoIosTimer>
                            </div>
                            <h3>Opening Hours</h3>
                            <p>Mon-Fri : 9:00 AM to 9:00 PM</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="site__info__detail">
                            <div className='site__info__icon'>
                                <BiSupport></BiSupport>
                            </div>
                            <h3>Support</h3>
                            <p>24/7 Support from online</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="manage__Inventory">
                <h1 className='text-center'>Manage Inventory</h1>
                <div className="container">
                    <div className="row mt-5 g-3">
                        {
                            products.slice(0,6).map(productData => <Products key={productData._id} products={productData}></Products>)
                        }

                    </div>
                </div>
            </div>
            <div className="about__us container">
                <div className="row g-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <img className='about__us__img' src={AboutUs} alt="" />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div className="about__use__detail">
                            <h2>About Us <span><img src="" alt="" /></span></h2>
                            <p>No man can live without food, and for our daily food, buying grocery items is a must. Buying fish, vegetables, eggs, meat, beef, etc. is a must for cooking regular food. We all have to go to local markets to buy these food and grocery items. In this age of business people do not find enough time to buy foods and groceries from local markets.

                                So either they choose their servants or go for super shops. Servants often fail to purchase quality products and shopping in super shops is very expensive.</p>
                            <button className='grocery__btn mt-4'>Contact Us</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
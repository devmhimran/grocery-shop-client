import React from 'react';
import './Home.css';
import HeroImage from '../../assets/img/Grocery/grocery_hero01.png';
import { BsTruck } from 'react-icons/bs';

const Home = () => {
    return (
        <div className='home__main'>
            <div className="hero__banner container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                        <div className="hero__detail">
                            <h1>Welcome to Grocery Find your Favorite Food</h1>
                            <p>Food is the ultimate pacifier. I feel like I can forgive anyone after a scrumptious meal.</p>
                            <button className='grocery__btn'>Contact Us</button>
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
                                <BsTruck></BsTruck>
                            </div>
                            <h3>Opening Hours</h3>
                            <p>Mon-Fri : 9:00 AM to 9:00 PM</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="site__info__detail">
                            <div className='site__info__icon'>
                                <BsTruck></BsTruck>
                            </div>
                            <h3>Support</h3>
                            <p>24/7 Support from online</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
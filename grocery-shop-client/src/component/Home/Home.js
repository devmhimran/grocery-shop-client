import React from 'react';
import './Home.css';
import HeroImage from '../../assets/img/Grocery/grocery_hero01.png'

const Home = () => {
    return (
        <div className='home__main'>
            <div className="hero__banner container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 d-flex align-items-center">
                        <div className="hero__detail">
                            <h1>Welcome to Grocery Find your Favorite Food</h1>
                            <p>Food is the ultimate pacifier. I feel like I can forgive anyone after a scrumptious meal.</p>
                            <button className='grocery__btn'>Contact Us</button>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <img className='hero__image' src={HeroImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
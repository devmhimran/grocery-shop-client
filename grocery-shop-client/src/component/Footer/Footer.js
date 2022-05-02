import React from 'react';
import './Footer.css';
import logo from '../../assets/img/gorcery-logo.png';
import { Link } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { IoMdCall } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs';

const Footer = () => {
    const date = new Date();
    const fullYear = date.getFullYear();
    return (
        <div className='footer__main'>
            <div className="footer__detail container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="footer__detail__one">
                            <Link to='/'><img className='footer__logo' src={logo} alt="" /></Link>
                            <p>Accessible Vans of America (AVA) is dedicated to providing quality rental vans with handicap accessible features.</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="quick__link">
                            <h3>Quick Links</h3>
                            <ul className='quick__link_list'>
                                <li><Link to='/'>Home</Link></li>
                                <li><Link to='/manageinventory'>Manage Inventory</Link></li>
                                <li><Link to='/manageitems'>Manage Items</Link></li>
                                <li><Link to='/additem'>Add Item</Link></li>
                                <li><Link to='/myitem'>My Item</Link></li>
                                <li><Link to='/blog'>Blog</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="contact__us">
                            <h3>Contact Links</h3>
                            <ul className='contact__us__list'>
                                <li><span><AiOutlineMail></AiOutlineMail></span><p>example@domain.com</p></li>
                                <li><span><IoMdCall></IoMdCall></span><p>+123 456 789</p></li>
                                <li><span><FaMapMarkerAlt></FaMapMarkerAlt></span><p>example@domain.com</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-12">
                        <div className="social__media">
                            <h3>Social</h3>
                            <a href="https://www.facebook.com/programmingHero"><span className='social__icon'><BsFacebook></BsFacebook></span></a>
                            <a href="https://www.youtube.com/c/ProgrammingHero"><span className='social__icon'><BsYoutube></BsYoutube></span></a>
                            <a href="https://www.instagram.com/programminghero/"><span className='social__icon'><BsInstagram></BsInstagram></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright__text">
                <div className="container text-center">
                    <p>Copyright ©{fullYear}. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
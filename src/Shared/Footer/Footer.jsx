import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaTelegramPlane, FaTwitter, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';


const Footer = () => {
    return (
        <>
            <div>
                <div className='bg-black text-white mt-5'>
                    <div className="container">
                        <div className="row py-5 ">
                            <div className="col-12 col-md-8 col-lg-4">
                                <Link className='text-decoration-none' to="/"><h1>Ranna</h1></Link>
                                <p>I provide new recipes with a twist on daily basis. I also post blog posts about fun ideas to do in the kitchen.</p>
                                <div>
                                    <Link className="btn btn-primary rounded mx-2" to='https://www.facebook.com/'><FaFacebook></FaFacebook></Link>
                                    <Link className="btn btn-primary rounded mx-2" to='https://www.twitter.com/'><FaTwitter></FaTwitter></Link>
                                    <Link className="btn btn-primary rounded mx-2" to='https://www.linkedin.com/'><FaLinkedin></FaLinkedin></Link>
                                    <Link className="btn btn-primary rounded mx-2" to='https://www.youtube.com/'><FaYoutube></FaYoutube></Link>
                                </div>
                            </div>
                            <div className=" col-12 col-md-4 col-lg-2">
                                <h3>Usefull Link</h3>
                                <p><Link className='text-white text-decoration-none' to="/">Home</Link></p>
                                <p><Link className='text-white text-decoration-none' to="/blog">Blog</Link></p>
                                <p><Link className='text-white text-decoration-none' to="/login">Login</Link></p>
                                <p><Link className='text-white text-decoration-none' to="/register">Registration</Link></p>
                                <p><Link className='text-white text-decoration-none' to="/about">About</Link></p>
                            </div>
                            <div className="col-12 col-md-4 col-lg-2">
                                <h3 className="mb-4">Contact Now</h3>
                                <p>555 4th 5t NW, Washington DC 20530, United States</p>
                                <p>+88 01750 000 000</p>
                                <p>info@gmail.com</p>
                            </div>
                            <div className="col-12 col-md-8 col-lg-4">
                                <h3 className="mb-4">Subscribe</h3>
                                <p>Subscribe for our latest & <br /> Articles. We Won’t Give You Spam <br /> Mails</p>
                                <div className="input-group  mb-3">
                                    <input type="text" className="form-control p-4" placeholder="Email Address"
                                        aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className="btn btn-primary p-4" type="button" id="button-addon2"><FaTelegramPlane></FaTelegramPlane></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <p className='container'>© 2020 Ranna. All Rights Reserved.</p>
                </div>
            </div>
        </>
    );
};

export default Footer;

/* Thank you */
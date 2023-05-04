import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhone, FaRegEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="p-5 container card mb-5 mt-5">
            <div className="text-center">
                <h1 className="fw-bold">Contact With Us</h1>
            </div>
            <div className="row gx-5">
                <div className="col-12 col-md-12 col-lg-6 card">
                    <div className="row">
                        <div
                            className="col-12 col-md-6 col-lg-6 bg-body-secondary text-center p-5 border-bottom border-end border-3">
                            <FaMapMarkerAlt className='fs-1'></FaMapMarkerAlt>
                            <h3>Address</h3>
                            <p>A108 Adam Street,
                                New York, NY 535022</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 bg-body-secondary text-center border-bottom border-3 p-5">
                            <FaPhone className='fs-1'></FaPhone>
                            <h3>Call Us</h3>
                            <p>+88 01750 00 00 00</p>
                            <p>+88 01750 00 00 00</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 bg-body-secondary text-center p-5 border-end border-3">
                            <FaRegEnvelope className='fs-1'></FaRegEnvelope>
                            <h3>Email Us</h3>
                            <p>info@gmail.com</p>
                            <p>info@gmail.com</p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 bg-body-secondary text-center p-5">
                            <FaClock className='fs-1'></FaClock>
                            <h3>Working Hours</h3>
                            <p>Mon-Fri: 9AM to 5PM</p>
                            <p>Sunday: 9AM to 1 PM</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 mt-md-4 mt-4 mt-lg-0 card p-4">
                    <form>
                        <div className="mb-5">
                            <input type="text" className="form-control p-3  bg-body-secondary"
                                placeholder="Your Name Here" />
                        </div>
                        <div className="mb-5">
                            <input type="email" className="form-control p-3 bg-body-secondary"
                                placeholder="Your Email Here" />
                        </div>
                        <div className="mb-5">
                            <input type="text" className="form-control p-3 bg-body-secondary"
                                placeholder="Subject" />
                        </div>
                        <div className="mb-4">
                            <textarea type="text" className="p-3 pb-5 form-control" placeholder="Message"
                                id="exampleInputMessage1"></textarea>
                        </div>
                        <div className=" d-grid gap-2  ">
                            <button className="btn p-3 btn-primary fw-bold" type="button">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
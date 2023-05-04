import React from 'react';
import './Items.css'
import { FaClock, FaCookieBite } from 'react-icons/fa';


const Items = () => {
    return (
        <div className="container mt-5 text-center">
            <h2>Some Items</h2>
            <div className="item-container">
                <div className="item">
                    <FaClock className='mt-5 fs-1'></FaClock>
                    <h2>Grill</h2>
                </div>
                <div className="item">
                    <FaClock className='mt-5 fs-1'></FaClock>
                    <h2>Quick Food</h2>
                </div>
                <div className="item">
                    <FaCookieBite className='mt-5 fs-1'></FaCookieBite>
                    <h2>Cookies</h2>
                </div>
                <div className="item">
                    <FaClock className='mt-5 fs-1'></FaClock>
                    <h2>Breakfast</h2>
                </div>
            </div>
        </div>
    );
};

export default Items;
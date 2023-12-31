import React from 'react';
import './Items.css'
import { FaMugHot, FaCookieBite, FaUtensils, FaWineGlass } from 'react-icons/fa';


const Items = () => {
    return (
        <div className="container mt-5 text-center">
            <h2>Some Items</h2>
            <div className="item-container">
                <div className="item">
                    <FaMugHot className='mt-5 fs-1'></FaMugHot>
                    <h2>Coffee</h2>
                </div>
                <div className="item">
                    <FaWineGlass className='mt-5 fs-1'></FaWineGlass>
                    <h2>Quick Food</h2>
                </div>
                <div className="item">
                    <FaCookieBite className='mt-5 fs-1'></FaCookieBite>
                    <h2>Cookies</h2>
                </div>
                <div className="item">
                    <FaUtensils className='mt-5 fs-1'></FaUtensils>
                    <h2>Breakfast</h2>
                </div>
            </div>
        </div>
    );
};

export default Items;

// Thank you
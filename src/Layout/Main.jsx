import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Slider from '../Pages/Slider/Slider';
import Chefs from '../Pages/Chefs/Chefs';
import { Outlet } from 'react-router-dom';
import Contact from '../Pages/Contact/Contact';
import Items from '../Pages/Items/Items';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Chefs></Chefs>
            <Outlet></Outlet>
            <Items></Items>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;

// Thank you
import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Slider from '../Pages/Slider/Slider';
import Chefs from '../Pages/Chefs/Chefs';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Chefs></Chefs>
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;
import React from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { FaHandPointRight, FaCheckCircle } from 'react-icons/fa';
import { Button } from 'react-bootstrap';


const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className='container card p-3'>
                <div className='card p-2'>
                    <h3>1. What is the differences between uncontrolled and controlled components?</h3>
                    <p><FaHandPointRight></FaHandPointRight> In a controlled component, form data is handled by a React component. Whereas in uncontrolled components, form data is handled by the DOM itself.</p>
                    <p><FaCheckCircle></FaCheckCircle> In a controlled component Use of state is completely optional, but one must use Refs in it. Usage of Component State is a must for controlled components.</p>
                </div>
                <div className='card p-2'>
                    <h3>2. How to validate React props using PropTypes?</h3>
                    <>
                        <h6><FaCheckCircle></FaCheckCircle> Below are the validators for the basic data types:</h6>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.any: The prop can be of any data type</p>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.bool: The prop should be a Boolean</p>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.number: The prop should be a number</p>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.string: The prop should be a string</p>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.func: The prop should be a function</p>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.array: The prop should be an array</p>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.object: The prop should be an object</p>
                        <p><FaHandPointRight></FaHandPointRight> PropTypes.symbol: The prop should be a symbol</p>
                    </>
                </div>
                <div className='card p-2'>
                    <h3>3. What is the difference between nodejs and express js?</h3>
                    <p><FaHandPointRight></FaHandPointRight> NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It’s built on Google Chrome’s V8 engine, which makes it fast and efficient to develop apps.</p>
                    <p><FaCheckCircle></FaCheckCircle> ExpressJS is a web application framework for NodeJS. That’s what mainly makes the difference between Express JS and Node JS. The former provides various features that make web application development fast and easy, which otherwise takes more time using only the latter. It provides a robust set of features for web and mobile applications.</p>
                </div>
                <div className='card p-2'>
                    <h3>4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p><FaHandPointRight></FaHandPointRight> Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</p>
                </div>
                <Button className='mt-2'>Downlode PDF</Button>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;
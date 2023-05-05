import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='container text-center mt-0'>
                <img src="/public/404.png" alt="" />
                <h1 className='fw-bold text-danger'>Sorry! Page Was Not Found</h1>
                <h5>The page you are looking is not available or has been removed. Try going to Home Page by using the button below.</h5>
                <Link className='d-block mt-5' to="/"><Button className='btn btn-danger'>Back to Home page</Button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
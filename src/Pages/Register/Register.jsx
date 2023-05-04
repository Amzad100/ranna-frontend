import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>Please Register</h1>
            <Form className='mx-auto w-25 card p-4'>
                <Form.Group className="mb-3" controlId="formGroupName">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPhotoURL">
                    <Form.Label>Your Photo URL</Form.Label>
                    <Form.Control type="text" name='url' placeholder="Enter your photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button>Submit</Button>
                <p>Do you have an account?<Link to="/login">Go to Login</Link></p>
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Register;
import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                setError('')
                const createdUser = result.user;
                setSuccess('Register successfully')
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>Please Register</h1>
            <Form onSubmit={handleRegister} className='mx-auto w-25 card p-4'>
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
                <Form.Text className='text-success'>
                    {success}
                </Form.Text>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                <Button type='submit'>Submit</Button>
                <p>Do you have an account?<Link to="/login">Go to Login</Link></p>
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Register;
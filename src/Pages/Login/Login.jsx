import React, { useContext } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>Please Login</h1>
            <Form onSubmit={handleLogin} className='mx-auto w-25 card p-4'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button type='submit'>Submit</Button>
                <p>Don't have an accoutn?<Link to="/register">Go to Register</Link></p>
                <Form.Text className='text-success'>

                </Form.Text>
                <Form.Text className='text-danger'>

                </Form.Text>
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Login;
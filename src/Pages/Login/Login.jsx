import React, { useContext, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const auth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setError('')
                navigate(from, { replace: true });
                setSuccess('Login successfully');
            })
            .catch(error => {
                setError(error.message);
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
                <Form.Text className='text-success'>
                    {success}
                </Form.Text>
                <Form.Text className='text-danger'>
                    {error}
                </Form.Text>
                <Button type='submit'>Login</Button>
                <Button className='mt-2' type='submit' onClick={handleGoogleSingIn}>Google login</Button>
                <Button className='mt-2' type='submit' onClick={handleGithubSignIn}>Github Login</Button>
                <p>Don't have an accoutn?<Link to="/register">Go to Register</Link></p>

            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Login;
import React, { useContext, useRef, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef();
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

        setError('');
        setSuccess('');

        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('please add at least two uppercase.');
            return
        }
        else if (!/(?=.*[!@#$*])/.test(password)) {
            setError('please add a special character.');
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters long');
            return
        }

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
    const handleResetPassword = event => {
        const email = emailRef.current.value;
        if (!email) {
            alert('Please provied your email adderss to reset password')
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('please chack your email')
            })
            .catch(error => {
                console.log(error);
                setError(error.message)
            })
    }
    return (
        <div>
            <Header></Header>
            <h1 className='text-center'>Please Login</h1>
            <Form onSubmit={handleLogin} className='mx-auto w-25 card p-4'>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' ref={emailRef} placeholder="Enter email" required />
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
                <p><small>Forget Password? please <button onClick={handleResetPassword} className='btn btn-link'>Reset Password</button></small></p>
            </Form>
            <Footer></Footer>
        </div>
    );
};

export default Login;

// Thank you
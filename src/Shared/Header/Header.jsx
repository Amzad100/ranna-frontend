import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg">
                <Container fluid>
                    <Link className='text-dark text-decoration-none' to="/"><h1>Ranna</h1></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-dark mx-4 text-decoration-none' to="/">Home</Link>
                            <Link className='text-dark mx-4 text-decoration-none' to="/blog">Blog</Link>
                        </Nav>
                        <div>
                            <img className="rounded-circle me-2" width="40" height="40" src="https://i.ibb.co/RCYkvbq/2.jpg" alt="profile" />
                            <Link to="/login"><Button className='btn-primary'><FaLock className='me-2' />Login</Button></Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
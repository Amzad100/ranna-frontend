import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg">
                <Container fluid>
                    <Link className='text-dark text-decoration-none' to=""><h1>Ranna</h1></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='text-dark mx-4 text-decoration-none' to="/home">Home</Link>
                            <Link className='text-dark mx-4 text-decoration-none' to="/chef">Chef</Link>
                            <Link className='text-dark mx-4 text-decoration-none' to="/recipes">Recipes</Link>
                            <Link className='text-dark mx-4 text-decoration-none' to="/blog">Blog</Link>
                        </Nav>
                        <div>
                            <Link to="/login"><Button className='btn-info'>Login</Button></Link>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
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
                            <Link className='text-dark mx-4 text-decoration-none' to="/about">About</Link>
                        </Nav>
                        <div>
                            {
                                user && <><small className='me-2'>{user?.displayName}</small><img className="rounded-circle me-2" width="40" height="40" src="https://i.ibb.co/RCYkvbq/2.jpg" alt="profile" /></>
                            }
                            {
                                user ?
                                    <Button onClick={handleLogOut} className='btn-primary'><FaLockOpen className='me-2' />Logout</Button> :
                                    <Link to="/login"><Button className='btn-primary'><FaLock className='me-2' />Login</Button></Link>
                            }
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;
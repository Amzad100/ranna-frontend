import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);
    const navLinkstyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            color: isActive ? 'red' : ''
        }
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


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
                            <NavLink style={navLinkstyle} className='text-dark mx-4 text-decoration-none' to="/">Home</NavLink>
                            <NavLink style={navLinkstyle} className='text-dark mx-4 text-decoration-none' to="/blog">Blog</NavLink>
                            <NavLink style={navLinkstyle} className='text-dark mx-4 text-decoration-none' to="/about">About</NavLink>
                        </Nav>
                        <div>
                            {
                                user && <><small className='me-2'>{isHovering && <small>{user.displayName}</small>}</small><img className="rounded-circle me-2" onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave} width="40" height="40" src={user.photoURL} alt="profile" /> </>
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

/* Thank you */
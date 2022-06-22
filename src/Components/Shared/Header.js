import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth)

    const logout = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand as={Link} to="/home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/home">HOME</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">BLOGS</Nav.Link>
                            {/* <Nav.Link as={Link} to="/purchase">PURCHASE</Nav.Link> */}
                        </Nav>
                        {
                            user && <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                        }
                        {
                            user ?
                            <Nav>
                                <Nav.Link onClick={logout}>LOGOUT</Nav.Link>
                            </Nav>
                            :
                            <Nav>
                                <Nav.Link as={Link} to='/login'>LOGIN</Nav.Link>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
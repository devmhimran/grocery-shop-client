import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './HeaderNav.css';
import groceryLogo from '../../assets/img/gorcery-logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
const HeaderNav = () => {
    const [user] = useAuthState(auth);
    const logOut = ()=>{
        signOut(auth);
    }
    return (
        <Navbar className='navbar__main py-3' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/"><img className='brand__logo' src={groceryLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/manageinventory">Manage Inventory</Nav.Link>
                        <Nav.Link as={Link} to="/manageitems">Manage Items</Nav.Link>
                        <Nav.Link as={Link} to="/additem">Add Item</Nav.Link>
                        <Nav.Link as={Link} to="/myitem">My Item</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        {
                            user ? 
                            <>
                                <Nav.Link onClick={logOut}>logout</Nav.Link>
                            </>:
                            <Nav.Link as={Link} to="/login">login</Nav.Link>
                        }
                       
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './HeaderNav.css';
import groceryLogo from '../../assets/img/gorcery-logo.png';
const HeaderNav = () => {
    return (
        <Navbar className='navbar__main py-3' expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img className='brand__logo' src={groceryLogo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Manage Inventory</Nav.Link>
                        <Nav.Link href="#link">Manage Items</Nav.Link>
                        <Nav.Link href="#link">Add Item</Nav.Link>
                        <Nav.Link href="#link">My Item</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default HeaderNav;
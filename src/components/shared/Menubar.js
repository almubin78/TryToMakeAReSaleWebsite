import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import './js'
const Menubar = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='text-white' as={Link} to='/'>Old is Gold</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='mx-2 text-decoration-none text-white' to='/'>Home</Link>
                            <Link className='mx-2 text-decoration-none text-white' to='/dashboard'>Dashboard</Link>
                            <Link id='Login' className='mx-2 text-decoration-none text-white' to='/login'>Login</Link>
                            <Link id='Login' className='mx-2 text-decoration-none text-white' to='/tempCollection'>AddSomeData</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
        </div>
    );
};

export default Menubar;
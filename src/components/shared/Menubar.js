import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Context } from '../../firebase/FirebaseAuthProvider';
const Menubar = () => {
    const { user, logOut } = useContext(Context);
    const handleLogOut = () => {
        logOut().then(() => { }).catch(err => console.error(err))
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container className=' position-relative'>
                    <Navbar.Brand className='text-white' as={Link} to='/'>Old is Gold</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='mx-2 text-decoration-none text-white' to='/'>Home</Link>
                            {user && <Link className='mx-2 text-decoration-none text-white' to='/dashboard'>Dashboard</Link>}
                            <Link className='mx-2 text-decoration-none text-white' to='/blogs'>Blogs</Link>
                            <Link className='mx-2 text-decoration-none text-white' to='/addAPost'>Make A Post</Link>
                            {
                                user?.email ?
                                    <button className='btn btn-primary position-absolute top-0 end-0' onClick={handleLogOut}>LogOut</button>
                                    :
                                    <Link className='btn btn-primary mx-2 text-decoration-none text-white position-absolute top-0 end-0' to='/login'>Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Menubar;
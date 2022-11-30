import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../firebase/FirebaseAuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
const Menubar = () => {
    const { user, logOut, loading } = useContext(Context);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email)
    const goTo = useNavigate()
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // if (loading) {
                //     return (
                //         <div className="spinner-border" role="status">
                //             <span className="visually-hidden">Loading...</span>
                //         </div>
                //     )
                // }
                goTo('/')
            })
            .catch(err => console.error(err))
    }
    if (loading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container className=' position-relative'>
                    <Navbar.Brand className='text-white text-xl text-uppercase' as={Link} to='/'>Be Smart with Older</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='mx-2 text-decoration-none text-white' to='/'>Home</Link>
                            
                           
                                {isAdmin &&
                                    <Link className='mx-2 text-decoration-none text-white' to='/dashboard/adminDashBoard'>Admin DashBoard</Link>
                                }
                                {isSeller &&
                                    <>
                                        <Link className='mx-2 text-decoration-none text-white' to='/dashboard/sellerDashBoard'>Seller DashBoard</Link>
                                        <Link className='mx-2 text-decoration-none text-white' to='/addAPost'>Make A Post</Link>
                                    </>
                                }                                                                         
                                {
                                    isBuyer &&
                                    <Link className='mx-2 text-decoration-none text-white' to='/dashboard/myorder'>My Orders</Link>  
                                }                                                     

                            <Link className='mx-2 text-decoration-none text-white' to='/blogs'>Blogs</Link>

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
import React from 'react';
import { Link } from 'react-router-dom';
import MyProducts from '../Posts/MyProducts';

const PosterDashBoard = () => {
    return (
        <div>
            <h1>This is Seller DashBoard</h1> 
            <div><Link to='/'>Go to home</Link></div> <span>or</span> <br />
            <Link to='/addAPost'>Add More Product</Link>
            <MyProducts></MyProducts>
        </div>
    );
};

export default PosterDashBoard;
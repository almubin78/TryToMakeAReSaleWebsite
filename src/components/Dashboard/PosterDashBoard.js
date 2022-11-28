import React from 'react';
import { Link } from 'react-router-dom';
import MyProducts from '../Posts/MyProducts';

const PosterDashBoard = () => {
    return (
        <div>
            <h1>This is Poster DashBoard</h1> <Link to='/'>Go to home</Link>
            <MyProducts></MyProducts>
        </div>
    );
};

export default PosterDashBoard;
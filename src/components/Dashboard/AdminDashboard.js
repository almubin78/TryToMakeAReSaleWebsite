import React from 'react';
import { Link } from 'react-router-dom';
import ListOfBuyers from './ListOfBuyers';
import ListOfSeller from './ListOfSeller';

const AdminDashboard = () => {
    
    return (
        <div>
            <h1>This is Admin DashBoard</h1><Link to='/'>Go to home</Link>
            <ListOfSeller></ListOfSeller>
            <ListOfBuyers></ListOfBuyers>
            
        </div>
    );
};

export default AdminDashboard;
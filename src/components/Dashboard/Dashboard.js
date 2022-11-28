import React from 'react';
import MyProducts from '../Posts/MyProducts';
import useDynamicTitle from '../shared/useDynamicTitle';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
    useDynamicTitle('Dashboard');
    return (
        <div>
            <AdminDashboard></AdminDashboard>
            {/* <MyProducts></MyProducts> */}
        </div>
    );
};

export default Dashboard;                
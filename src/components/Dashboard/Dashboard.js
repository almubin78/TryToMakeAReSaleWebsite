import React from 'react';
import useDynamicTitle from '../shared/useDynamicTitle';
import AdminDashboard from './AdminDashboard';

const Dashboard = () => {
    useDynamicTitle('Dashboard');
    return (
        <div>
            <AdminDashboard></AdminDashboard>
            
        </div>
    );
};

export default Dashboard;                
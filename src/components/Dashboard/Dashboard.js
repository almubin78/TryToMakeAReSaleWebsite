import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Advetise from '../shared/Advetise';
import Banner from '../shared/Banner';
import useDynamicTitle from '../shared/useDynamicTitle';

const Dashboard = () => {
    useDynamicTitle('Dashboard');
    const [show,setShow]=useState(false)
    return (
        <div>
            <h2>This is DashBoard</h2>
            <Link to='/'>HomePage</Link>
            
            <button onClick={()=>setShow(false)}>Banner Show</button>
            <button onClick={()=>setShow(true)}>Advertise Show</button>
            {
                show ? <Banner></Banner> : <Advetise></Advetise>
            }
        </div>
    );
};

export default Dashboard;
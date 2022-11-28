import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../shared/Menubar';

const Main = () => {
    return (
        <div>
            <Menubar></Menubar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../../firebase/FirebaseAuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(Context);
    const location = useLocation();
    if (loading) {
        return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        )
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'  state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;
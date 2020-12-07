import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';


const PrivateRoute = ({ component, ...props }) => {

    const { currentUser } = useAuth();

    return (
        // <Route {...props}>
        // {
        //     currentUser?
        //         children: <Redirect to="/login"></Redirect>
        // }
        (currentUser ? (
            <Route {...props}
                component={component} />) : <Redirect to="/login" />));

}

export default PrivateRoute;
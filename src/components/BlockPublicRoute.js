import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// Route dla adresów które nie mają być wyświetlane w przypadku zalogowania - /login, forgot-password etc.
const BlockPublicRoute = ({ component, ...props }) => {

    const { currentUser } = useAuth();

    return (
        (!currentUser ? (
            <Route {...props}
                component={component} />) : <Redirect to="/" />));

}

export default BlockPublicRoute;
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/AuthContext'
import { AddContainer } from '../style/Containers';

import { useDispatch } from 'react-redux'
import {
    ACCOUNT_LOGOUT_LOADING,
    ACCOUNT_LOGOUT_LOADING_FAILED,
    ACCOUNT_LOGOUT_LOADING_SUCCESFUL
} from '../constants';

const Profil = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const { currentUser, logout } = useAuth();
    const handleLogout = () => {
        dispatch({ type: ACCOUNT_LOGOUT_LOADING })
        logout()
            .then(function (res) {
                history.push("/login");
                dispatch({ type: ACCOUNT_LOGOUT_LOADING_SUCCESFUL })
            })
            .catch(function (err) {
                dispatch({ type: ACCOUNT_LOGOUT_LOADING_FAILED, err_code: err.code })
            });
    }
    return (
        <AddContainer>
            <p onClick={handleLogout}>Wyloguj się</p>
            <h3>{currentUser.email}</h3>
            <Link to="/update-profile">Aktualizuj profil</Link>
        </AddContainer >
    )
}

export default Profil;


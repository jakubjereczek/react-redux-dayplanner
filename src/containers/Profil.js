import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { SubtitleOther, Button } from '../style/App';
import { Image } from '../style/Profil';
import { useAuth } from '../contexts/AuthContext'
import { ProfilContainer } from '../style/Containers';

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
        <ProfilContainer>
            <div>
                <Image />
            </div>
            <div>
                <SubtitleOther>Witaj, <span>{currentUser.email}</span></SubtitleOther>
            </div>
            <div>
                <Button onClick={handleLogout}>Wyloguj się</Button>
                <Button><Link to="/update-profile">Aktualizuj profil</Link></Button>
            </div>
        </ProfilContainer >
    )
}

export default Profil;


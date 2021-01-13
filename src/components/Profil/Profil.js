import React from 'react';
import { useHistory } from 'react-router-dom';

import Text from 'components/Text';
import { Image, ProfilContainer } from './Profil.css';
import Button from 'components/Button'
import ColorChanger from 'components/ColorChanger';

import { useAuth } from 'contexts/AuthContext'

import { useDispatch } from 'react-redux'
import {
    ACCOUNT_LOGOUT_LOADING,
    ACCOUNT_LOGOUT_LOADING_FAILED,
    ACCOUNT_LOGOUT_LOADING_SUCCESFUL
} from 'constants/account.constants';

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

    if (currentUser) {
        return (
            <ProfilContainer>
                <div>
                    <Image />
                </div>
                <div>
                    <Text type="subtitle-other">Witaj, <span>{currentUser.email}</span></Text>
                </div>
                <div>
                    <ColorChanger />
                    <Button onClick={handleLogout}>Wyloguj się</Button>
                    <Button to="/update-profile">Aktualizuj profil</Button>
                </div>
            </ProfilContainer >
        )
    } else {
        return null;
    }

}

export default Profil;


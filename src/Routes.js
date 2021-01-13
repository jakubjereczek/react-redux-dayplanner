import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { themeLight, themeDark } from 'utils/theme';
import Wrapper from 'components/Wrapper';

import GlobalStyle from './index.css';

import { ForgotPassword, Info, Login, Main as MainPage, NotFound, Signup, UpdateProfile } from './pages';
import Profil from 'components/Profil';

import 'react-toastify/dist/ReactToastify.css';

import BlockPublicRoute from './components/BlockPublicRoute';
import PrivateRoute from './components/PrivateRoute';

import { useTheme } from 'contexts/ThemeContext'

const Routes = () => {

    const { isLight } = useTheme();

    return (
        <ThemeProvider theme={isLight ? themeLight : themeDark}>
            <Wrapper>
                <GlobalStyle />
                <Router basename={process.env.PUBLIC_URL}>
                    <Profil />
                    <Switch>
                        {/* Prywatne routy z PrivateRoute */}
                        <PrivateRoute exact path="/">
                            <MainPage />
                        </PrivateRoute>
                        <PrivateRoute path="/info/:id">
                            {/* <Info props={null} /> */}
                            <Info />
                        </PrivateRoute>
                        {/* BlockPublicRoute dla routow, ktore nie maja być wyswietlane w przypadku zalogowania (nastapi przekierowanie na "/") */}
                        <BlockPublicRoute path="/login">
                            <Login />
                        </BlockPublicRoute>
                        <BlockPublicRoute path="/signup">
                            <Signup />
                        </BlockPublicRoute>
                        <BlockPublicRoute path="/forgot-password">
                            <ForgotPassword />
                        </BlockPublicRoute>
                        <PrivateRoute path="/update-profile">
                            <UpdateProfile />
                        </PrivateRoute>
                        <Route>
                            <NotFound />
                        </Route>
                    </Switch>
                </Router>
            </Wrapper>
        </ThemeProvider>
    );
}

export default Routes;
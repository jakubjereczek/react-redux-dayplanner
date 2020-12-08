import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import { AddContainer } from '../style/Containers';
import { Title } from '../style/App';
import { Input, Label } from '../style/Form';
import { Button, ButtonInside } from '../style/App';

import { useAuth } from '../contexts/AuthContext'

import { useDispatch } from 'react-redux'
import {
    ACCOUNT_LOGIN_LOADING,
    ACCOUNT_LOGIN_LOADING_FAILED,
    ACCOUNT_LOGIN_LOADING_SUCCESFUL
} from '../constants';


const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const {
        currentUser,
        login } = useAuth();

    const [isError, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const required = value => (value ? undefined : 'Pole jest wymagane')

    const onSubmit = async (values) => {
        setLoading(true);
        dispatch({ type: ACCOUNT_LOGIN_LOADING })
        login(values.email, values.password)
            .then(function (res) {
                dispatch({ type: ACCOUNT_LOGIN_LOADING_SUCCESFUL })
                history.push("/");
            })
            .catch(function (err) {
                dispatch({ type: ACCOUNT_LOGIN_LOADING_FAILED, err_code: err.code })
            })
        setLoading(false);
    }

    return (
        <AddContainer>
            <Title>Login</Title>
            {isError ? <h4>{isError}</h4> : null}
            <FinalForm onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <Label>Email</Label>
                                    <Input {...input} type="email" placeholder="Your email adress" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="password" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <Label>Haslo</Label>
                                    <Input {...input} type="password" placeholder="Your password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <ButtonInside disabled={isLoading} type="submit" disabled={submitting}>
                            Zaloguj się</ButtonInside>
                    </form>
                )}
            />
            <p>Nie posiadasz konta? <Link to="/signup" >Zarejestuj sie</Link></p>
            <p>Nie pamiętasz hasla? <Link to="/forgot-password" >Przypomnij haslo</Link></p>


        </AddContainer>
    )
}

export default Login;
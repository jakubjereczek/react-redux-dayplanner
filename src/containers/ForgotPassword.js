import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import { AddContainer } from '../style/Containers';
import { Title } from '../style/App';
import { Input, Label } from '../style/Form';
import { Button, ButtonInside } from '../style/App';

import { useAuth } from '../contexts/AuthContext'

import { useDispatch } from 'react-redux'

import {
    ACCOUNT_REMIND_PASSWORD_LOADING,
    ACCOUNT_REMIND_PASSWORD_LOADING_SUCCESFUL,
    ACCOUNT_REMIND_PASSWORD_LOADING_FAILED
} from '../constants';

const ForgotPassword = () => {

    const dispatch = useDispatch();
    const {
        currentUser,
        reset } = useAuth();


    const [isLoading, setLoading] = useState(false);

    const required = value => (value ? undefined : 'Pole jest wymagane')

    const onSubmit = async (values) => {

        setLoading(true);
        dispatch({ type: ACCOUNT_REMIND_PASSWORD_LOADING })
        reset(values.email)
            .then(function (res) {
                dispatch({ type: ACCOUNT_REMIND_PASSWORD_LOADING_SUCCESFUL })
            })
            .catch(function (err) {
                dispatch({ type: ACCOUNT_REMIND_PASSWORD_LOADING_FAILED, err_code: err.code })
            }).finally(() => {
                setLoading(false);
            })

    }

    return (
        <AddContainer>
            <Title>Przypomij haslo</Title>
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

                        <ButtonInside disabled={isLoading} type="submit" disabled={submitting}>
                            Reset Password</ButtonInside>
                    </form>
                )}
            />
            <p>Nie posiadasz konta? <Link to="/signup" >Zarejestuj sie</Link></p>
            <p>Wroc do <Link to="/login">logowania</Link></p>
        </AddContainer>
    )
}

export default ForgotPassword;
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import Profil from './Profil';

import { AddContainer } from '../style/Containers';
import { Title } from '../style/App';
import { Input, Label } from '../style/Form';
import { Button, ButtonInside } from '../style/App';

import { useAuth } from '../contexts/AuthContext'
import { useDispatch } from 'react-redux'
import {
    ACCOUNT_CHANGE_LOADING,
    ACCOUNT_CHANGE_LOADING_FAILED,
    ACCOUNT_CHANGE_LOADING_SUCCESFUL
} from '../constants';

import notification from '../toast'

const UpdateProfile = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const {
        currentUser,
        updateEmail, updatePassword } = useAuth();

    const [isLoading, setLoading] = useState(false);

    const required = value => (value ? undefined : 'Pole jest wymagane')

    const onSubmit = async (values) => {
        if (values.password !== values.passwordconfirm) {
            return notification.toastWarn("Hasla nie są identyczne!");
        }
        setLoading(true);
        const promises = [];
        console.log(values.email)
        if (values.email !== currentUser.email) {
            console.log("nie jest taki sam")
            promises.push(updateEmail(values.email))
        }
        if (values.password)
            promises.push(updatePassword(values.password))
        values.email = "";
        values.password = "";
        values.passwordconfirm = "";
        dispatch({ type: ACCOUNT_CHANGE_LOADING })
        Promise.all(promises).then(() => {
            // wszystkie musza byc succesful
            dispatch({ type: ACCOUNT_CHANGE_LOADING_SUCCESFUL })
            // history.push("/")
        }).catch((err) => {
            dispatch({ type: ACCOUNT_CHANGE_LOADING_FAILED, err_code: err.code })
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            <Profil />
            <AddContainer>
                <Title>Aktualizacja profilu</Title>
                <FinalForm onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="email">
                                {({ input, meta }) => (
                                    <div>
                                        <Label>Email</Label>
                                        <Input {...input} type="email" defaultValue={currentUser.email} />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input, meta }) => (
                                    <div>
                                        <Label>Haslo</Label>
                                        <Input {...input} type="password" placeholder="Your password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>
                            <Field name="passwordconfirm">
                                {({ input, meta }) => (
                                    <div>
                                        <Label>Powtórz haslo</Label>
                                        <Input {...input} type="password" placeholder="Your password" />
                                        {meta.error && meta.touched && <span>{meta.error}</span>}
                                    </div>
                                )}
                            </Field>

                            <ButtonInside disabled={isLoading} type="submit" disabled={submitting}>
                                Aktualizuj profil</ButtonInside>
                        </form>
                    )}
                />
                <p><Link to="/" >Powrót</Link></p>
            </AddContainer>
        </>
    )
}

export default UpdateProfile;
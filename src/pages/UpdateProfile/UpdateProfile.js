import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import Container from 'components/Container';

import Text from 'components/Text';
import { Input, Label, InputBorder, InputError } from 'components/Form.css';
import Button from 'components/Button';

import { useAuth } from 'contexts/AuthContext'
import { useDispatch } from 'react-redux'
import {
    ACCOUNT_CHANGE_LOADING,
    ACCOUNT_CHANGE_LOADING_FAILED,
    ACCOUNT_CHANGE_LOADING_SUCCESFUL
} from 'constants/account.constants';

import notification from 'toast'

const UpdateProfile = () => {

    const dispatch = useDispatch();

    const {
        currentUser,
        updateEmail, updatePassword } = useAuth();

    const [isLoading, setLoading] = useState(false);

    const onSubmit = async (values) => {
        if (values.password !== values.passwordconfirm) {
            return notification.toastWarn("Hasla nie są identyczne!");
        }
        setLoading(true);
        const promises = [];
        console.log(values.email)
        if (values.email !== currentUser.email) {
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
            <Container>
                <Text type="title">Aktualizacja profilu</Text>
                <FinalForm onSubmit={onSubmit}
                    render={({ handleSubmit, form, submitting, pristine, values }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="email">
                                {({ input, meta }) => (
                                    <div>
                                        <Label>Email</Label>
                                        <InputBorder>
                                            <Input {...input} type="email" initialValue={currentUser.email} />
                                            <InputError>{meta.error && meta.touched && <span>{meta.error}</span>}</InputError>
                                        </InputBorder>
                                    </div>
                                )}
                            </Field>
                            <Field name="password">
                                {({ input, meta }) => (
                                    <div>
                                        <Label>Haslo</Label>
                                        <InputBorder>
                                            <Input {...input} type="password" placeholder="Your password" />
                                            <InputError>{meta.error && meta.touched && <span>{meta.error}</span>}</InputError>
                                        </InputBorder>
                                    </div>
                                )}
                            </Field>
                            <Field name="passwordconfirm">
                                {({ input, meta }) => (
                                    <div>
                                        <Label>Powtórz haslo</Label>
                                        <InputBorder>
                                            <Input {...input} type="password" placeholder="Your password" />
                                            <InputError>{meta.error && meta.touched && <span>{meta.error}</span>}</InputError>
                                        </InputBorder>
                                    </div>
                                )}
                            </Field>

                            <Button disabled={isLoading} type="submit" disabled={submitting}>
                                Aktualizuj profil</Button>
                        </form>
                    )}
                />
                <Text type="subtitle-center"><Link to="/" >Powrót do strony głównej</Link></Text>
            </Container>
        </>
    )
}

export default UpdateProfile;
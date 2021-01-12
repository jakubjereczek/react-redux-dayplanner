import React, { useState, Fragment } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import Start from 'components/Start';

import Text from 'components/Text';
import { Input, Label, InputBorder, InputError } from 'components/Form.css';
import Button from 'components/Button';

import { useAuth } from 'contexts/AuthContext'

import { useDispatch } from 'react-redux'

import {
    ACCOUNT_REGISTER_LOADING,
    ACCOUNT_REGISTER_LOADING_SUCCESFUL,
    ACCOUNT_REGISTER_LOADING_FAILED
} from 'constants/account.constants';

import notification from 'toast';

const Signup = () => {

    const history = useHistory();

    const dispatch = useDispatch();

    const {
        // currentUser,
        singup } = useAuth();

    const [isLoading, setLoading] = useState(false);

    const required = value => (value ? undefined : 'Pole jest wymagane')

    const onSubmit = async (values) => {
        if (values.password !== values.passwordconfirm) {
            return notification.toastWarn("Hasla nie są identyczne!");
        }
        setLoading(true);
        dispatch({ type: ACCOUNT_REGISTER_LOADING })
        singup(values.email, values.password)
            .then(function (res) {
                dispatch({ type: ACCOUNT_REGISTER_LOADING_SUCCESFUL })
                history.push("/");
            })
            .catch(function (err) {
                dispatch({ type: ACCOUNT_REGISTER_LOADING_FAILED, err_code: err.code })
            }).finally(() => {
                setLoading(false);
            })
    }

    const name = "Signup";

    const links = (
        <Fragment>
            <Text type="subtitle-center">Posiadasz juz konto? <span><Link to="/login" >Zaloguj sie</Link>.</span></Text>
        </Fragment>
    );

    return (
        <Start name={name} links={links}>
            <FinalForm onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <Label>Email</Label>
                                    <InputBorder>
                                        <Input {...input} type="email" placeholder="Your email adress" />
                                        <InputError>{meta.error && meta.touched && <span>{meta.error}</span>}</InputError>
                                    </InputBorder>

                                </div>
                            )}
                        </Field>
                        <Field name="password" validate={required}>
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
                        <Field name="passwordconfirm" validate={required}>
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
                            Zarejestruj się</Button>
                    </form>
                )}
            />
        </Start >)
}

export default Signup;
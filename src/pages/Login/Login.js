import React, { Fragment, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import Start from 'components/Start';

import Text from 'components/Text';
import { Input, Label, InputBorder, InputError } from 'components/Form.css';
import Button from 'components/Button';

import { useAuth } from 'contexts/AuthContext'

import { useDispatch } from 'react-redux'
import {
    ACCOUNT_LOGIN_LOADING,
    ACCOUNT_LOGIN_LOADING_FAILED,
    ACCOUNT_LOGIN_LOADING_SUCCESFUL
} from 'constants/account.constants';


const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const { login } = useAuth();

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

    const name = "Login";

    const links = (
        <Fragment>
            <Text type="subtitle-center">Nie posiadasz konta? <span><Link to="/signup" >Zarejestuj sie</Link></span>.</Text>
            <Text type="subtitle-center">Nie pamiętasz hasla? <span><Link to="/forgot-password" >Przypomnij haslo</Link></span>.</Text>
        </Fragment>
    );

    return (
        <Start name={name} links={links}>
            {/* Sam formularz, reszta jest taka sama dla każnego elementu */}
            <FinalForm onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="email" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <Label>Email</Label>
                                    <InputBorder>
                                        <Input {...input} type="email" placeholder="Your email adress" />
                                        <InputError>{meta.error && meta.touched && <span>{meta.error}</span>}
                                        </InputError>
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

                        <Button disabled={isLoading} type="submit" disabled={submitting}>
                            Zaloguj się</Button>
                    </form>
                )}
            />
        </Start>
    )
}

export default Login;
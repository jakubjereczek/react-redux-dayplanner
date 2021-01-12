import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import Start from 'components/Start';

import Text from 'components/Text';
import { Input, Label, InputBorder, InputError } from 'components/Form.css';

import Button from 'components/Button';

import { useAuth } from 'contexts/AuthContext'

import { useDispatch } from 'react-redux'

import {
    ACCOUNT_REMIND_PASSWORD_LOADING,
    ACCOUNT_REMIND_PASSWORD_LOADING_SUCCESFUL,
    ACCOUNT_REMIND_PASSWORD_LOADING_FAILED
} from 'constants/account.constants';

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

    const name = "Przypomij hasło";

    const links = (
        <Fragment>
            <Text type="subtitle-center">Nie posiadasz konta? <span><Link to="/signup" >Zarejestuj sie</Link></span></Text>
            <Text type="subtitle-center">Powrót do <span><Link to="/login">logowania</Link></span></Text>
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

                        <Button disabled={isLoading} type="submit" disabled={submitting}>
                            Reset</Button>
                    </form>
                )}
            />
        </Start>
    )
}

export default ForgotPassword;
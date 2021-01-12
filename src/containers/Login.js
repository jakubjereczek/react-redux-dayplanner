import React, { Fragment, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import { AddContainer, DividedInsideContainer } from '../style/Containers';
import { LeftContainer, RightContainer, TitleLogo, TitleLogoBold, LogoContainer, Image } from '../style/Start';
import { Title, SubtitleCenter } from '../style/App';
import { Input, Label, InputBorder, InputError } from '../style/Form';
import { Button } from '../style/App';

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

    return (
        <Fragment>
            <LogoContainer>
                <p>
                    Day <span>planner</span>
                </p>
            </LogoContainer>
            <AddContainer>
                <Title>Login</Title>
                <DividedInsideContainer>
                    <LeftContainer>
                        <Image />
                        <TitleLogo>Plan your day to <TitleLogoBold>be smart</TitleLogoBold></TitleLogo>
                    </LeftContainer>
                    <RightContainer>
                        <FinalForm onSubmit={onSubmit}
                            render={({ handleSubmit, form, submitting, pristine, values }) => (
                                <form onSubmit={handleSubmit}>
                                    <Field name="email" validate={required}>
                                        {({ input, meta }) => (
                                            <div>
                                                <Label>Email</Label>
                                                <InputBorder>
                                                    <Input {...input} type="email" placeholder="Your email address" />
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
                    </RightContainer>
                </DividedInsideContainer>
                <div>
                    <SubtitleCenter>Nie posiadasz konta? <span><Link to="/signup" >Zarejestuj sie</Link></span>.</SubtitleCenter>
                    <SubtitleCenter>Nie pamiętasz hasla? <span><Link to="/forgot-password" >Przypomnij haslo</Link></span>.</SubtitleCenter>
                </div>
            </AddContainer>
        </Fragment>
    )
}

export default Login;
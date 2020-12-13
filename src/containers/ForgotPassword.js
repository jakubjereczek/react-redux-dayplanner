import React, { useState, Fragment } from 'react';
import { Link } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import { AddContainer, DividedInsideContainer } from '../style/Containers';
import { LeftContainer, RightContainer, TitleLogo, TitleLogoBold, LogoContainer, Image } from '../style/Start';

import { Title, SubtitleCenter } from '../style/App';
import { Input, Label, InputBorder, InputError } from '../style/Form';
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
        <Fragment>
            <LogoContainer>
                <p>
                    Day <span>planner</span>
                </p>
            </LogoContainer>
            <AddContainer>
                <Title>Przypomij haslo</Title>
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
                    </RightContainer>
                </DividedInsideContainer>
                <div>

                    <SubtitleCenter>Nie posiadasz konta? <span><Link to="/signup" >Zarejestuj sie</Link></span></SubtitleCenter>
                    <SubtitleCenter>Powrót do <span><Link to="/login">logowania</Link></span></SubtitleCenter>
                </div>
            </AddContainer>
        </Fragment>
    )
}

export default ForgotPassword;
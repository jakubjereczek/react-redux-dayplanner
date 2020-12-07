import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import { AddContainer } from '../style/Containers';
import { Title } from '../style/App';
import { Input, Label } from '../style/Form';
import { Button, ButtonInside } from '../style/App';

import { useAuth } from '../contexts/AuthContext'

const ForgotPassword = () => {

    const {
        currentUser,
        resetPassword } = useAuth();

    const [isError, setError] = useState("");
    const [isMessage, setMessage] = useState("");

    const [isLoading, setLoading] = useState(false);

    const required = value => (value ? undefined : 'Pole jest wymagane')

    const onSubmit = async (values) => {
        try {
            setError("")
            setMessage("");
            setLoading(true);
            await resetPassword(values.email);
            setMessage("Sprawdz Twoj email dla kolejnych instrukcji")
        } catch (err) {
            setError("Bląd z zresetowaniem hasla")
        }
        setLoading(false);

    }

    return (
        <AddContainer>
            <Title>Przypomij haslo</Title>
            {isError ? <h4>{isError}</h4> : null}
            {isMessage ? <h4>{isMessage}</h4> : null}
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
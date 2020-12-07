import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import { AddContainer } from '../style/Containers';
import { Title } from '../style/App';
import { Input, Label } from '../style/Form';
import { Button, ButtonInside } from '../style/App';

import { useAuth } from '../contexts/AuthContext'

const Signup = () => {

    const history = useHistory();

    const {
        // currentUser,
        createAccount } = useAuth();

    const [isError, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const required = value => (value ? undefined : 'Pole jest wymagane')

    const onSubmit = async (values) => {
        if (values.password !== values.passwordconfirm) {
            return setError("Hasla nie są takie same!");
        }
        try {
            setError("")
            setLoading(true);

            await createAccount(values.email, values.password)
            history.push("/");
        } catch (err) {
            setError("Bląd z utworzeniem konta: " + err)
        }
        setLoading(false);

    }

    return (
        <AddContainer>
            <Title>Signup</Title>
            {isError ? <h4>{isError}</h4> : null}
            {/* {currentUser && currentUser.email} */}
            {/* Dzięki isLoading w AuthContext mozemy zastosować tylko currentUser.email, nie spradzajac czy zaladowaly sie dane */}
            {/* {currentUser.email} */}
            {/* {JSON.stringify(currentUser)} */}
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
                        <Field name="passwordconfirm" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <Label>Powtórz haslo</Label>
                                    <Input {...input} type="password" placeholder="Your password" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>

                        <ButtonInside disabled={isLoading} type="submit" disabled={submitting}>
                            Zarejestruj się</ButtonInside>
                    </form>
                )}
            />
            <p>Posiadasz juz konto? <Link to="/login" >Zaloguj sie</Link></p>

        </AddContainer>
    )
}

export default Signup;
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Form as FinalForm, Field } from 'react-final-form'

import Profil from './Profil';

import { AddContainer } from '../style/Containers';
import { Title } from '../style/App';
import { Input, Label } from '../style/Form';
import { Button, ButtonInside } from '../style/App';


import { useAuth } from '../contexts/AuthContext'

const UpdateProfile = () => {

    const history = useHistory();

    const {
        currentUser,
        updateAccountEmail, updateAccountPassword } = useAuth();

    const [isError, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    const required = value => (value ? undefined : 'Pole jest wymagane')

    const onSubmit = async (values) => {
        if (values.password !== values.passwordconfirm) {
            return setError("Hasla nie są takie same!");
        }
        const promises = [];
        setLoading(true);
        setError("");
        if (values.email !== currentUser.email) {
            promises.push(updateAccountEmail(values.email))
        }
        if (values.password) {
            promises.push(updateAccountEmail(values.password))
        }
        Promise.all(promises).then(() => {
            // wszystkie musza byc succesful
            history.push("/")
        }).catch((err) => {

            setError("Bląd z utworzeniem konta: " + err)
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            <Profil />
            <AddContainer>
                <Title>Aktualizacja profilu</Title>
                {isError ? <h4>{isError}</h4> : null}
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
                <p>Nie chcesz edytowac?<Link to="/" >Anuluj</Link></p>
            </AddContainer>
        </>
    )
}

export default UpdateProfile;
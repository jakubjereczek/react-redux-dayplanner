import React from 'react';
import { connect } from 'react-redux';
import { Form as FinalForm, Field } from 'react-final-form'

import { Input, Label } from '../style/Form';
import { Button } from '../style/App';

import { addElement } from '../actions/planner.actions';

const Form = ({ planner, addElement }) => {

    const required = value => (value ? undefined : 'Pole jest wymagane')
    const minLenght = min => value =>
        isNaN(value) || value.lenght >= min ? undefined : `Treść musi być wieksza lub rowna niz ${min} znaków`
    const composeValidators = (...validators) => value =>
        validators.reduce((error, validator) => error || validator(value), undefined)

    const onSubmit = values => {
        const value = values.hour;
        const hours = value.slice(0, 2);
        const minutes = value.slice(3, 5);
        const actualDate = new Date();
        const day = actualDate.getDate() < 10 ? `0${actualDate.getDate()}` : actualDate.getDate();
        const month = actualDate.getMonth() < 10 ? `0${actualDate.getMonth()}` : actualDate.getMonth();
        const year = actualDate.getFullYear()
        const expiredDate = new Date(year, month, day, hours, minutes).getTime();
        const id = planner.length === 0 ? 1 : planner[planner.length - 1].id + 1;
        const createdDate = new Date().getTime();
        addElement(id, expiredDate, values.task, createdDate);
    }

    return (
        <FinalForm onSubmit={onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="task" validate={composeValidators(required, minLenght(10))}>
                        {({ input, meta }) => (
                            <div>
                                <Label>Zadanie</Label>
                                <Input {...input} type="text" placeholder="Treść nowego zadania..." />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="hour" validate={required}>
                        {({ input, meta }) => (
                            <div>
                                <Label>Godzina</Label>
                                <Input {...input} type="time" placeholder="Last Name" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    <Button type="submit" disabled={submitting}>
                        Dodaj
                    </Button>
                    <Button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}>
                        Reset
                    </Button>
                </form>
            )}
        />
    )
}

export default connect(state => ({
    planner: state.planner,
}), {
    addElement
})(Form);


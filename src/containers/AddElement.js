import React, { useState } from 'react';

import { AddContainer } from '../style/Containers';
import { addElement } from '../actions/planner.actions';

import { Input, Label, InputCorrectInfo } from '../style/AddElement';
import { Title, Button } from '../style/App';

import { connect } from 'react-redux';

const AddElement = ({ planner, addElementToState }) => {

    const [text, setText] = useState("Zadanie");
    const [expired, setExpired] = useState();
    const [addedInformation, setAddedInformation] = useState(null);
    const [errorInformation, setErrorInformation] = useState(null);

    const handleChangeInput = (event) => {
        const value = event.target.value;
        if (addedInformation) {
            setAddedInformation(null);
        }
        if (errorInformation) {
            setErrorInformation(null);
        }
        if (event.target.type === "text") {
            setText(value)
        }
        if (event.target.type === "time") {
            const hours = value.slice(0, 2);
            const minutes = value.slice(3, 5);
            const actualDate = new Date();
            const day = actualDate.getDate() < 10 ? `0${actualDate.getDate()}` : actualDate.getDate();
            const month = actualDate.getMonth() < 10 ? `0${actualDate.getMonth()}` : actualDate.getMonth();
            const year = actualDate.getFullYear()
            const expiredDate = new Date(year, month, day, hours, minutes).getTime();
            setExpired(expiredDate)
        }
    }

    const handleAddElement = () => {
        if (expired && text) {
            const id = planner.length === 0 ? 1 : planner[planner.length - 1].id + 1;
            const createdDate = new Date().getTime();
            addElementToState(id, expired, text, createdDate);
            setAddedInformation("Element został dodany!");
        } else {
            setErrorInformation("Element nie został dodany. Niepoprawnie wypełniony formularz.")
        }
    }

    return (
        <AddContainer>
            <Title>Dodaj element do listy zadań dnia!</Title>
            <Label htmlFor="text">Zadanie</Label>
            <Input type="text" id="text" value={text} onChange={handleChangeInput}></Input>
            <Label htmlFor="date">Godzina</Label>
            <Input type="time" id="date" onChange={handleChangeInput}></Input>
            <Button type="submit" onClick={handleAddElement}>Dodaj element</Button>

            {addedInformation ? (<InputCorrectInfo color="green">{addedInformation}</InputCorrectInfo>) : null}
            {errorInformation ? (<InputCorrectInfo color="tomato">{errorInformation}</InputCorrectInfo>) : null}
        </AddContainer >
    )
}

const mapStateToProps = (state) => {
    return {
        planner: state.planner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addElementToState: (id, expiredDate, text, createdDate) => {
            dispatch(addElement(id, expiredDate, text, createdDate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddElement);
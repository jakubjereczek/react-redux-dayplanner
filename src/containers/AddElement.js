import React from 'react';

import { AddContainer } from '../style/Containers';
import { addElement } from '../actions/planner.actions';

import { Title, Input, Label } from '../style/AddElement';
import { Button } from '../style/App';

import { connect } from 'react-redux';

const AddElement = ({ addClick }) => {

    let text, expired;
    let err = "";

    const handleChangeInput = (event) => {

        console.log(event.target);
        if (event.target.type === "text") {
            text = event.target.value;
        } else if (event.target.type === "time") {
            const actualDate = ((new Date().
                toLocaleDateString()).split(".")).reverse().join("-");
            console.log(actualDate)
            const expiredDate = (new Date(`${actualDate} ${event.target.value}`)).getTime();
            console.log(expiredDate)
            expired = expiredDate;
        }
    }

    const handleAddElement = () => {
        if (expired !== undefined && text !== undefined) {
            // get data
            const createdDate = new Date().getTime();
            addClick(expired, text, createdDate);
            err = "Added element to state"
        } else {
            err = "Undefined value of text or time"
        }
        console.log(err);
    }

    return (
        <AddContainer>
            <Title>Dodaj element do listy zadań dnia!</Title>
            <Label htmlFor="text" value={text}>Zadanie</Label>
            <Input type="text" id="text" onChange={handleChangeInput}></Input>
            <Label htmlFor="date">Godzina</Label>
            <Input type="time" value={expired} id="date" onChange={handleChangeInput}></Input>
            <Button type="submit" onClick={handleAddElement}>Dodaj element</Button>
        </AddContainer>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addClick: (expiredDate, text, createdDate) => {
            dispatch(addElement(expiredDate, text, createdDate))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddElement);
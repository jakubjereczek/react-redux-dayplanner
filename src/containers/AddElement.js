import React from 'react';

import { AddContainer } from '../style/Containers';
import { addElement } from '../actions/planner.actions';

import { Input, Label } from '../style/AddElement';
import { Title, Button } from '../style/App';

import { connect } from 'react-redux';

const AddElement = ({ planner, addClick }) => {

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
            console.log(planner)

            const id = planner.length === 0 ? 1 : planner[planner.length - 1].id + 1;
            console.log("ID", id);
            const createdDate = new Date().getTime();
            addClick(id, expired, text, createdDate);
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

const mapStateToProps = (state) => {
    return {
        planner: state.planner
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addClick: (id, expiredDate, text, createdDate) => {
            dispatch(addElement(id, expiredDate, text, createdDate))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddElement);
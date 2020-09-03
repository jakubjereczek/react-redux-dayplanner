import React from 'react';

import { addElement } from '../actions/planner.actions';

import { connect } from 'react-redux';

const AddElement = ({ addClick }) => {

    let text, hour;
    let err = "";

    const handleChangeInput = (event) => {

        console.log(event.target);
        if (event.target.type === "text") {
            text = event.target.value;
        } else if (event.target.type === "time") {
            hour = event.target.value;
        }

    }

    const handleAddElement = () => {
        console.log(hour, text);
        if (hour !== undefined && text !== undefined) {
            addClick(hour, text);
            err = "Added element to state"
        } else {
            err = "Undefined value of text or time"
        }
        console.log(err);
    }

    return (
        <div>
            <h3>Dodaj element do listy zadań dnia</h3>
            <label htmlfor="text" value={text}>Zadanie</label>
            <input type="text" name="text" onChange={handleChangeInput}></input>
            <label htmlfor="data">Godzina</label>
            <input type="time" value={hour} name="data" onChange={handleChangeInput}></input>
            <button type="submit" onClick={handleAddElement}>Dodaj</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addClick: (hour, text) => {
            dispatch(addElement(hour, text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddElement);
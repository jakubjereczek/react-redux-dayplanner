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
            // get data
            const date = new Date().getTime();
            addClick(hour, text, date);
            err = "Added element to state"
        } else {
            err = "Undefined value of text or time"
        }
        console.log(err);
    }

    return (
        <div>
            <h3>Dodaj element do listy zadań dnia</h3>
            <label htmlFor="text" value={text}>Zadanie</label>
            <input type="text" id="text" onChange={handleChangeInput}></input>
            <label htmlFor="date">Godzina</label>
            <input type="time" value={hour} id="date" onChange={handleChangeInput}></input>
            <button type="submit" onClick={handleAddElement}>Dodaj</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addClick: (hour, text, fulldata) => {
            dispatch(addElement(hour, text, fulldata))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddElement);
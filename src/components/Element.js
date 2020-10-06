import React from 'react';
import { Link } from "react-router-dom";

import { SingleElement, Text, Manage, Hour } from '../style/Element'
import { ButtonInside } from '../style/App';


const Element = ({ id, text, expiredDate, f, expired }) => {
    const date = new Date(expiredDate);
    const dateString = (new Date(expiredDate)).toLocaleDateString();

    const hours = `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}`;
    const minutes = `${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`;

    return (
        <SingleElement expired={expired}><Hour>{hours}:{minutes} {dateString}</Hour><Text>{text.length > 100 ? `${text.slice(0, 100)}...` : `${text}`}</Text><Manage>{<ButtonInside onClick={f}>Usuń</ButtonInside>}<Link to={"/info/" + id}>{<ButtonInside>Info</ButtonInside>}</Link></Manage></SingleElement>
    )
}

export default Element;
import React from 'react';

import { SingleElement, Text, Manage, Hour } from '../style/Element'
import { ButtonInside } from '../style/App';


const Element = ({ id, text, expiredDate, f }) => {

    const date = new Date(expiredDate);
    const dateString = (new Date(expiredDate)).toLocaleDateString();

    const hours = `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}`;
    const minutes = `${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`;

    return (
        <SingleElement><Hour>{hours}:{minutes} {dateString}</Hour><Text>{text}</Text><Manage>{<ButtonInside onClick={f}>Usuń</ButtonInside>}{<ButtonInside>Info</ButtonInside>}</Manage></SingleElement>
    )
}

export default Element;
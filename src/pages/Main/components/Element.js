import React from 'react';
import { useHistory } from "react-router-dom";

import { SingleElement, Text, Hour, ImageDelete, ImageInfo } from './Elements.css'


const Element = ({ id, text, expiredDate, f, expired, i }) => {
    const date = new Date(expiredDate);
    const dateString = (new Date(expiredDate)).toLocaleDateString();

    const hours = `${date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`}`;
    const minutes = `${date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`}`;

    const history = useHistory();

    return (
        <SingleElement expired={expired}>
            <div></div>
            <div>#{i}</div>
            <div>
                <Text>{text.length > 100 ? `${text.slice(0, 100)}...` : `${text}`}</Text>
                <Hour>{!expired ? `Wygasa ${dateString} o godzinie ${hours}:${minutes}` : `Wygasł ${dateString} o godzinie ${hours}:${minutes}`}</Hour>
            </div>
            <div>
                <ImageDelete onClick={f} />
                <ImageInfo onClick={() => history.push("/info/" + id)} />
            </div>
        </SingleElement>
    )
}

export default Element;
import React from 'react';

const Element = ({ id, hour, text, f }) => {

    console.log(f);
    return (
        <p>{`Zadanie ${text} do godziny ${hour} `}{<button onClick={f}>Usuń</button>}</p>
    )
}

export default Element;
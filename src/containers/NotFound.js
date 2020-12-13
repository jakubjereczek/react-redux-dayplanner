import React from 'react';
import { Link } from "react-router-dom";

import { AddContainer } from '../style/Containers';
import { Title, ButtonInside } from '../style/App';

const NotFound = () => {

    return (
        <>
            <AddContainer>
                <Title>Page not found</Title>
                <h1>404</h1>
                <h3>Niestety tutaj nic nie ma!
                </h3>
                <p>Prawdopodobie to czego właśnie szukasz znajduję się pod innym adresem.</p>
                <Link to="/"><ButtonInside>Kliknij tutaj aby przejść do strony glównej</ButtonInside></Link>
            </AddContainer>
        </>
    )
}

export default NotFound;
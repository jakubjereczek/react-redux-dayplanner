import React from 'react';
import { Link } from "react-router-dom";

import Profil from './Profil';
import { ErrorContainer } from '../style/Containers';
import { Title, ButtonInside } from '../style/App';

const NotFound = () => {

    return (
        <>
            {/* <Profil /> */}
            <ErrorContainer>
                <Title>Page not found</Title>
                <p>Tutaj nic nie ma, naciśnij niżej aby przenieść się do strony głównej!</p>
                <Link to="/"><ButtonInside>Kliknij tutaj</ButtonInside></Link>
            </ErrorContainer>
        </>
    )
}

export default NotFound;
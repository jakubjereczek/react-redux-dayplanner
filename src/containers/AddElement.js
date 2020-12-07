import React from 'react';

import { AddContainer } from '../style/Containers';
import Profil from './Profil';
import Form from '../components/Form';
import { Title } from '../style/App';


const AddElement = () => {

    return (
        <>
            <Profil />
            <AddContainer>
                <Title>Dodaj element do listy zadań dnia!</Title>
                <Form />
            </AddContainer >
        </>
    )
}

export default AddElement;
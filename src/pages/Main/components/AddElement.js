import React from 'react';

import Container from 'components/Container';
import Form from './Form';
import Text from 'components/Text';


const AddElement = () => {

    return (
        <>
            <Container>
                <Text type="title">Dodaj element do listy zadań dnia!</Text>
                <Form />
            </Container >
        </>
    )
}

export default AddElement;
import React from 'react';

import Container from 'components/Container';

import Text from 'components/Text';

import Button from 'components/Button';

const NotFound = () => {

    return (
        <>
            <Container>
                <Text type="title">Page not found</Text>
                <h1>404</h1>
                <h3>Niestety tutaj nic nie ma!
                </h3>
                <p>Prawdopodobie to czego właśnie szukasz znajduję się pod innym adresem.</p>
                <Button type="inside" to="/">Wróć do strony głownej</Button>
            </Container>
        </>
    )
}

export default NotFound;
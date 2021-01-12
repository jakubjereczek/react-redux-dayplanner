import React from 'react';

import { AppContainer, Main } from './Wrapper.css';

const Wrapper = ({ children }) => {
    return (
        <AppContainer>
            <Main>
                {children}
            </Main>
        </AppContainer>
    );
}

export default Wrapper;
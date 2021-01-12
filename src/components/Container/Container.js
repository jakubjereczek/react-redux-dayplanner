import React, { useMemo } from 'react';

import { DefaultContainer, ButtonsRightContainer, DividedInsideContainer, ElementsContainer } from './Container.css';

const Container = ({ type, children, ...props }) => {

    const Component = useMemo(() => {
        switch (type) {
            case 'default':
                return DefaultContainer;
            case 'buttonsRight':
                return ButtonsRightContainer;
            case 'divitedInside':
                return DividedInsideContainer;
            case 'elements':
                return ElementsContainer;
            default:
                return DefaultContainer;
        }
    }, [type])

    return (
        <Component {...props}>
            {children}
        </Component>
    );
}

export default Container;
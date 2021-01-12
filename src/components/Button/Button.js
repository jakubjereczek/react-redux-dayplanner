import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';

import { Button as ButtonDefault, ButtonInside } from './Button.css';

const Button = ({ type, children, ...props }) => {

    const Component = useMemo(() => {
        switch (type) {
            case 'default':
                return ButtonDefault;
            case 'inside':
                return ButtonInside;
            default:
                return ButtonDefault;
        }
    }, [type]);

    // W przypadku props to - wygenerowanie rownież linku
    return props.to ? (
        <Link to={props.to}>
            <Component>
                {children}
            </Component>
        </Link >) : (
            <Component {...props}>
                {children}
            </Component>
        )

}

export default Button;
import React from 'react';
import { Component } from './ColorChanger.css';

import { useTheme } from 'contexts/ThemeContext'

const ColorChanger = () => {
    const { isLight, changeTheme } = useTheme();

    return isLight ? (
        <Component onClick={changeTheme} />
    ) : (
            <Component dark onClick={changeTheme} />
        );

}

export default ColorChanger;
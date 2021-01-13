import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext(undefined);

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {

    const [isLight, setLight] = useState(true);

    const changeTheme = () => {

        if (isLight) {
            setLight(false)
        } else {
            setLight(true);
        }
    }

    const values = {
        changeTheme,
        isLight
    }

    return <ThemeContext.Provider value={values}>
        {children};
    </ThemeContext.Provider>
};
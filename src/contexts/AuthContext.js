import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext(undefined);

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setLoading] = useState(true);

    const singup = (email, password) => auth.createUserWithEmailAndPassword(email, password);

    const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

    const logout = () => auth.signOut();

    const updateEmail = (email) => currentUser.updateEmail(email);

    const updatePassword = (password) => currentUser.updatePassword(password);

    const reset = (email) => auth.sendPasswordResetEmail(email);


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
            // W zaleznosci czy sie powiedzie wstawi nazwe usera lub null;
        })

        return unsubscribe;
    }, []);

    const values = {
        currentUser,
        singup,
        login,
        logout,
        reset,
        updateEmail,
        updatePassword,
    }

    return (
        <AuthContext.Provider value={values}>
            {!isLoading && children}
        </AuthContext.Provider>
    );
}

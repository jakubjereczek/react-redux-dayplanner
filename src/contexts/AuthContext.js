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

    // return await new Promise((resolve, reject) => {
    //     auth.signInWithEmailAndPassword(email, password).then((res) => {
    //         resolve(res);
    //     }).catch(err => {
    //         reject(err)
    //     });
    // })
    // notification("test");
    // return auth.signInWithEmailAndPassword(email, password)
    //     .then(res => notification("Witaj " + currentUser.email + ", zostałeś zalogowany!"))
    //     .catch(err => notification(err.message));
    // err.code - potem pod api


    const logout = () => auth.signOut();

    const updateEmail = (email) => currentUser.updateEmail(email);

    const updatePassword = (password) => currentUser.updateEmail(password);

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
        createAccount: (email, password) => {
            singup(email, password);
        },
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

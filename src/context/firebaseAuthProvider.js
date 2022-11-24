import React, { createContext } from 'react';

export const Context = createContext();

const firebaseAuthProvider = ({child}) => {

    const infos = {

    }
    return (
        <Context.Provider value={infos}>
            {child}
        </Context.Provider>
    );
};

export default firebaseAuthProvider;
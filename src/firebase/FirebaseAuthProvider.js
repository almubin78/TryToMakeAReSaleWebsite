import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { getAuth, createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, onAuthStateChanged } from 'firebase/auth'

export const context = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebaseAuthProvider = ({child}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] =useState(true);

    const userCreate = ( email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const logIn=(email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const googleLogin =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }
    const gitHubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const updateUser = info =>{
        return updateProfile(auth.currentUser,info)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(stateOfUser)=>{
            // console.log(stateOfUser);
            setUser(stateOfUser);
            setLoading(false)
        })
        return ()=>unsubscribe();
    },[])
    
    const Info = {
        user,
        loading,
        userCreate,
        logIn,
        googleLogin,
        gitHubLogin,
        updateUser,
        logOut
    }
    return (
        <context.Provider value={Info}>
            {child}
        </context.Provider>
    );
};

export default FirebaseAuthProvider;
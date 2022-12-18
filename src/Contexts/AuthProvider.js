import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import {getAuth} from 'firebase/auth'


export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = (props) => {
    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
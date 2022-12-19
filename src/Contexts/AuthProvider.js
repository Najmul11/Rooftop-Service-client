import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'


export const AuthContext=createContext()
const auth=getAuth(app)
const googleProvider=new GoogleAuthProvider()
const facebookProvider=new FacebookAuthProvider()

const AuthProvider = (props) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]=useState(true)
    // create user
    const createUser=(email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // email/pass signin
    const signIn=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google popup sign
    const signInWithGoogle=()=>{
        setLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
    // facebook popup sign
    const signInWithFacebook=()=>{
        setLoading(true)
       return signInWithPopup(auth, facebookProvider)
    }
      // auth state observer
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
     // update profile
     const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser, profile)
    }
     //  signout
     const logout=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const authInfo={user, signInWithGoogle,loading, signInWithFacebook, logout, createUser, signIn, updateUserProfile}
    return (
        <AuthContext.Provider value={authInfo}>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState, } from "react";
import { app } from "../firebase-config/firebase";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthCOntext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        return signOut(auth)
    }

    const GoogleLogin = () => {
        return signInWithPopup (auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            console.log(currentUser);
        })
        return (
            () => {
            return unsubscribe()
        }
    )
      }, [])

    const authInfo = {
        user,
        loading,
        CreateUser,
        Login,
        LogOut,
        GoogleLogin
    }

    return <AuthCOntext.Provider value={authInfo}>
        {children}
    </AuthCOntext.Provider>
};

export default AuthProvider;
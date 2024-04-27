import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebse.init"; 
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    console.log(user)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignUp = () =>{
        return signInWithPopup(auth, githubProvider)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });

    }, [])

    const userInfo = {
        signUp,
        signInUser,
        googleSignUp,
        githubSignUp,
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;
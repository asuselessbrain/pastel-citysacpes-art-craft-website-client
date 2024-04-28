import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebse.init";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading]=useState(true)

    console.log(user)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubSignUp = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    const logOut = () => {
        setLoading(true)
        setUser(null)
        signOut(auth)
    }

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoading(false);
            setUser(user);
        });

        return () => unsubscribe();
    }, []);
    

    const userInfo = {
        signUp,
        signInUser,
        googleSignUp,
        githubSignUp,
        logOut,
        user,
        loading,
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;
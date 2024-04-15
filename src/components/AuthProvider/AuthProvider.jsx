import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [isLoading,setLoading] = useState(true);

    const registerUser =(email,pass)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const logInUser = (email,pass)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const logInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);

    }
   const logInWithGithub = ()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider);
    }
    const logOut=()=>{
        setLoading(true);
        setUser(null);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
                setUser(currentUser);
                setLoading(false)
            return ()=>{
                unsubscribe();   
            }
        })
    },[])
    const shareTools = {
        user,
        registerUser,
        logInUser,
        logInWithGoogle,
        logInWithGithub,
        logOut,
        isLoading
    }
    return (
        <div>
            <AuthContext.Provider value={shareTools}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
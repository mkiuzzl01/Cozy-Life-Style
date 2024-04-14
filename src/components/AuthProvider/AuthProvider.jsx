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
        return createUserWithEmailAndPassword(auth,email,pass);
    }
    const logInUser = (email,pass)=>{
        return signInWithEmailAndPassword(auth,email,pass);
    }
    const logInWithGoogle = ()=>{
        return signInWithPopup(auth, googleProvider);

    }
   const logInWithGithub = ()=>{
        return signInWithPopup(auth,githubProvider);
    }
    const logOut=()=>{
        setUser(null);
        return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser);
            }
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
        logOut
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
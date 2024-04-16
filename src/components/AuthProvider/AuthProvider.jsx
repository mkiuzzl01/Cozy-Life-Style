import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/Firebase.config";
import {  toast } from "react-toastify";

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
    const profileUpdate = (name,image)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:image,
        })
    }

    const successToast = (text)=>{
        return toast.success(text, {
            position: "bottom-center"
          });
    }

    const errorToast = (text)=>{
        return toast.error(text, {
            position: "bottom-center"
          });
    }
    const warningToast = (text)=>{
        return toast.warn(text, {
            position: "bottom-center"
          });
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
        isLoading,
        registerUser,
        logInUser,
        logInWithGoogle,
        logInWithGithub,
        logOut,
        profileUpdate,
        successToast,
        errorToast,
        warningToast
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
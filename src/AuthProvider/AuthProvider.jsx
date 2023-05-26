import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const authContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createUser) => {
      setLoader(false);
      setUser(createUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateProfileData = async (displayName, photoURL) => {
    setLoader(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      setUser(auth.currentUser);
    } catch (error) {
      console.log("Error updating profile:", error);
    } finally {
      setLoader(false);
    }
  };

  const Info = {
    user,
    createUser,
    loginUser,
    googleLogin,
    loader,
    logOutUser,
    updateProfileData,
  };

  return <authContext.Provider value={Info}>{children}</authContext.Provider>;
};

export default AuthProvider;

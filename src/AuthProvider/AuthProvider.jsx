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

export const authContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loader, setLoader] = useState(false);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoader(true);
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
    return signOut(auth);
  };

  const updateProfileData = async (displayName, photoURL) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: photoURL,
      });
      setUser(auth.currentUser);
    } catch (error) {
      console.log("Error updating profile:", error);
    } finally {
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

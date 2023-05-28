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
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
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

  useEffect(() => {
    const isAuthenticated = () => {
      const token = localStorage.getItem("token");
      return !!token;
    };

    const checkAuthentication = () => {
      const authenticated = isAuthenticated();
      setLoader(false);
      setUser(authenticated ? { username: "exampleUser" } : null);
    };

    checkAuthentication();
  }, []);

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

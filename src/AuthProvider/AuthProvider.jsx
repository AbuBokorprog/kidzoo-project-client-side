import React, { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Info = { user, createUser, loader };

  return <authContext.Provider value={Info}>{children}</authContext.Provider>;
};

export default AuthProvider;

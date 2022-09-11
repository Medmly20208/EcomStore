import React, { useContext, useState, useEffect } from "react";

import { Auth } from "../firebase";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthCtx = React.createContext();

export const useAuth = () => {
  return useContext(AuthCtx);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  function signup(email, password) {
    return createUserWithEmailAndPassword(Auth, email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(Auth, email, password);
  }
  function signout() {
    return signOut(Auth);
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(Auth, email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, signup, login, signout, resetPassword };

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
};

export default AuthProvider;

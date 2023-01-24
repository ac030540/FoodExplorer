import React, { useState, createContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase.config";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  onAuthStateChanged(auth, (u) => {
    if (u) {
      setUser(u);
    }
    setIsLoading(false);
  });

  const onRegister = (email, password, repeatPassword) => {
    if (repeatPassword !== password) {
      setError({
        message: "Passwords don't match",
      });
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        isAuthenticated: !!user,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

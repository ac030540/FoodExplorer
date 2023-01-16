import React, { useState, createContext } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
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

  return (
    <AuthContext.Provider value={{ user, isLoading, error, onLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";
import { isLoading } from "expo-font";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const isLogin = (email, password) => {
    setLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        isLoading(false);
        setError(null);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.toString());
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        error,
        loading,
        user,
        isLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
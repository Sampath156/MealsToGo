import React, { createContext, useState } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";
import { isLoading } from "expo-font";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    //firebase hook to check whether any active session is there or not, and accordingly persist the session
    if (usr) {
      setUser(usr);
      setLoading(true);
    } else {
      setLoading(false);
    }
  });

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

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError("Error: Passwords doesn't match");
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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

  const onLogout = () => {
    firebase.auth().signOut();
    setUser(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        error,
        loading,
        user,
        isLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

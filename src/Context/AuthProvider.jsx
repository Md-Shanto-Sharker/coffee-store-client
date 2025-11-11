import React from "react";
import { AuthContext } from "./AuthContext";
// import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const SignOutFormFirebase = (auth) => {
    return signOut(auth);
  };

  const userInfo = {
    createUser,
    SignOutFormFirebase,
    signIn,
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;

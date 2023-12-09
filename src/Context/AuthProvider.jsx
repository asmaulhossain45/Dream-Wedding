/* eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types"; // ES6
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const MySwal = withReactContent(Swal);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  // Create User Account with Email and Password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   Login User With Email and Password
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   Login User With Google
  const userGoogleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  //   Login User With Github
  const userGithubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //   Manage User Login or LogOut
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  // ----- Log Out Section -----
  const handleLogOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log Out Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const userInfo = {
    user,
    loading,
    createUser,
    userLogin,
    handleLogOut,
    userGoogleLogin,
    userGithubLogin,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;

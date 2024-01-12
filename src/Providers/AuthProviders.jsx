import { useEffect, useState } from "react";
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const socialHandler = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((response) => {
            const token = response.data.token;
            localStorage.setItem("access-token", token);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error creating JWT token:", error);
          });
      } else {
        // User is logged out, remove the token
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return () => {
      unSubscribe(); // Call the unsubscribe function
      localStorage.removeItem("access-token");
    };
  }, []);

  const passValue = {
    user,
    loading,
    createUser,
    login,
    logOut,
    socialHandler,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={passValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;

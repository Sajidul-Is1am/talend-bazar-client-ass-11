import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // registraiton with email and password
  const handleRegistraion = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logout
  const handleLogOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // login with google and others
  const provider = new GoogleAuthProvider();

  const handleRegistraionInGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // login with email and password
  const handleLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const handleUpdate = (userName, imglink) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: imglink,
    });
  };

  // mannage user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
  }, []);

  //==============================================================================

  const userInfo = {
    handleRegistraion,
    handleRegistraionInGoogle,
    handleLogin,
    handleLogOut,
    handleUpdate,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

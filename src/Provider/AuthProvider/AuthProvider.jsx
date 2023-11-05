import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // registraiton with email and password
  const handleRegistraion = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // logout
  const handleLogOut = () => {
    return signOut(auth);
  };

  // login with google and others
  const provider = new GoogleAuthProvider();

  const handleRegistraionInGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  // login with email and password
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // mannage user
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  //==============================================================================

  const userInfo = {
    handleRegistraion,
    handleRegistraionInGoogle,
    handleLogin,
    handleLogOut,
    user,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

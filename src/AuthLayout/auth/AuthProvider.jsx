import React, { createContext, useContext, useEffect, useState } from "react";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  sendEmailVerification,
  signInWithPopup
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "../../firebase/Firebase.config";
import { axiosInstance } from "./useAxiosSecour";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Sign up
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // Update profile
  const updateUserProfiles = (updateData) => {
    if (!auth.currentUser) return Promise.reject("No user logged in");
    return updateProfile(auth.currentUser, updateData);
  };

const passwordReset = async (email) => {
  try {
    console.log("Attempting reset for:", email);
    await sendPasswordResetEmail(auth, email);
    console.log("Password reset email sent!");
  } catch (error) {
    console.error("Error sending password reset email:", error.code, error.message);
  }
};


  // Email verification
  const VerificationEmail = () => {
    if (!auth.currentUser) return;
    return sendEmailVerification(auth.currentUser)
      .then(() => console.log("Verification email sent!"))
      .catch(err => console.error(err));
  };

  // Google login
  const signInGoogleUser = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      await saveUserToBackend(result.user);
      return result.user;
    } catch (error) {
      console.error("Google Login Failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // GitHub login
  const signInGithubUser = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, githubProvider);
      await saveUserToBackend(result.user);
      return result.user;
    } catch (error) {
      console.error("GitHub Login Failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Save user to backend
  const saveUserToBackend = async (user) => {
    try {
      await axiosInstance.post("/users", {
        email: user.email,
        displayName: user.displayName || "User",
        photoURL: user.photoURL,
        role: "user",
        created_at: new Date().toISOString(),
        last_log_in: new Date().toISOString(),
      });
    } catch (err) {
      console.error("Save user error:", err);
    }
  };

  // Track user state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfiles,
    passwordReset,
    VerificationEmail,
    signInGoogleUser,
    signInGithubUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from './Firebase.config';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign In
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign Out
  const logOut = () => {
    return signOut(auth);
  };

  // Update Profile
  const updateUserProfile = (updateData) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, updateData);
    } else {
      return Promise.reject(new Error('No user is currently logged in.'));
    }
  };

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Auth data to provide via context
  const authData = {
    user,
    loading,
    createUser,
    signin,
    logOut,
    updateUserProfile,
    setUser,       // যদি প্রয়োজন হয় তবে রাখুন, তবে সতর্ক থাকুন
    setLoading,    // একইভাবে, প্রয়োজনে রাখুন
  };

  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";



import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
  User
} from "firebase/auth";
import { auth, googleProvider } from "../libs/firebase";

// ✅ TYPE (FIXED)
type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  googleLogin: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

// ✅ PROVIDER
export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>(null);

  // 🔄 Track user
  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  // 🔐 LOGIN
  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  // 📝 REGISTER (with name)
  const register = async (
    name: string,
    email: string,
    password: string
  ) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(res.user, {
      displayName: name,
    });
  };

  // 🔵 GOOGLE LOGIN
  const googleLogin = async () => {
    await signInWithPopup(auth, googleProvider);
  };

  // 🚪 LOGOUT
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, register, googleLogin, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ✅ HOOK
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Wrap app with AuthProvider");
  return context;
};
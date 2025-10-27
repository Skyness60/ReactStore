import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import type { AuthUser, AuthContextType } from "../types/Auth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("authUser");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  async function login(username: string, password: string) {
    const res = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (data.token) {
      setUser({ id: 0, username, email: "", password, token: data.token });
    } else {
      throw new Error("Identifiants invalides");
    }
  }

  function logout() {
    setUser(null);
  }

  const value: AuthContextType = { user, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
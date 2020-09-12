import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface AuthState {
  token: string;
  user: object;
}

interface SigInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: object;
  signIn(credentials: SigInCredencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@iEnvironment:token");
    const user = localStorage.getItem("@iEnvironment:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("sessions", {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem("@iEnvironment:token", token);
    localStorage.setItem("@iEnvironment:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@iEnvironment:token");
    localStorage.removeItem("@iEnvironment:user");

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used withing an AuthProvider");
  }
  return context;
}

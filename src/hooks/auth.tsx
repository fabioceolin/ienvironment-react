import React, { createContext, useCallback, useState, useContext } from "react";
import api from "../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  login: string;
  password: string;
  active: boolean;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  token: string;
  user: User;
  expirationTime: string;
}

interface SigInCredencials {
  login: string;
  password: string;
}

interface AuthContextData {
  user: User;
  expirationTime: string;
  signIn(credentials: SigInCredencials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@iEnvironment:token");
    const user = localStorage.getItem("@iEnvironment:user");
    const expirationTime = localStorage.getItem("@iEnvironment:expirationTime");

    if (token && user && expirationTime) {
      return { token, user: JSON.parse(user), expirationTime };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ login, password }) => {
    const response = await api.post("users/login", {
      login,
      password,
    });
    const { token, user, expirationTime } = response.data;

    localStorage.setItem("@iEnvironment:token", token);
    localStorage.setItem("@iEnvironment:user", JSON.stringify(user));
    localStorage.setItem("@iEnvironment:expirationTime", expirationTime);

    setData({ token, user, expirationTime });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@iEnvironment:token");
    localStorage.removeItem("@iEnvironment:user");
    localStorage.removeItem("@iEnvironment:expirationTime");

    setData({} as AuthState);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        expirationTime: data.expirationTime,
      }}
    >
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

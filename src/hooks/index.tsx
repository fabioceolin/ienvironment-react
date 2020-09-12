import React from "react";

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";
import { SidebarProvider } from "./sidebar";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SidebarProvider>
      <ToastProvider>{children}</ToastProvider>
    </SidebarProvider>
  </AuthProvider>
);

export default AppProvider;

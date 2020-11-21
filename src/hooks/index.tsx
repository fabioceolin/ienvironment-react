import React from "react";

import { AuthProvider } from "./auth";
import { ToastProvider } from "./toast";
import { SidebarProvider } from "./sidebar";
import { UploadProvider } from "./upload";

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <SidebarProvider>
      <UploadProvider>
        <ToastProvider>{children}</ToastProvider>
      </UploadProvider>
    </SidebarProvider>
  </AuthProvider>
);

export default AppProvider;

import React, { createContext, useCallback, useState, useContext } from "react";

interface SidebarContextData {
  isCollapsed: boolean;
  isToggled: boolean;
  handleToggleCollapse(): void;
  handleToggleSidebar(value: boolean): void;
}

const SidebarContext = createContext<SidebarContextData>(
  {} as SidebarContextData
);

const SidebarProvider: React.FC = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const handleToggleSidebar = useCallback((value) => {
    setIsToggled(value);
  }, []);

  return (
    <SidebarContext.Provider
      value={{
        isCollapsed: isCollapsed,
        isToggled: isToggled,
        handleToggleCollapse,
        handleToggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

function useSidebar(): SidebarContextData {
  const context = useContext(SidebarContext);

  if (!context) {
    throw new Error("useSidebar must be used withing an SidebarProvider");
  }
  return context;
}

export { SidebarProvider, useSidebar };

import React from "react";

import { Scrollbars } from "react-custom-scrollbars";

import Sidebar from "../Sidebar";

import { useSidebar } from "../../hooks/sidebar";

import { FaBars } from "react-icons/fa";

import Fab from "@material-ui/core/Fab";

import { Container, Main } from "./styles";

const Base: React.FC = ({ children }) => {
  const { handleToggleSidebar } = useSidebar();

  return (
    <Container>
      <Sidebar />
      <Main>
        <div className="btn-hidden" onClick={() => handleToggleSidebar(true)}>
          <Fab
            size="small"
            color="inherit"
            className="btn-color-primary"
            aria-label="Menu"
          >
            <FaBars />
          </Fab>
        </div>
        <Scrollbars>{children}</Scrollbars>
      </Main>
    </Container>
  );
};

export default Base;

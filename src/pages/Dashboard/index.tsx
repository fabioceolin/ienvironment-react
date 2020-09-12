import React, { useState, useCallback } from "react";

import Sidebar from "../../components/Sidebar";
import { Scrollbars } from "react-custom-scrollbars";

import Fab from "@material-ui/core/Fab";

import { FaBars } from "react-icons/fa";

import { Container, Main, Grid, Card } from "./styles";

const Dashboard: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const handleToggleSidebar = useCallback(
    (value) => {
      setIsToggled(value);
    },
    [isToggled]
  );

  return (
    <Container>
      <Sidebar />
      <Main>
        <div className="btn-hidden" onClick={() => handleToggleSidebar(true)}>
          <Fab
            size="small"
            onClick={() => handleToggleSidebar(true)}
            color="primary"
            aria-label="Menu"
          >
            <FaBars />
          </Fab>
        </div>
        <Scrollbars>
          <Grid>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid>
        </Scrollbars>
      </Main>
    </Container>
  );
};

export default Dashboard;

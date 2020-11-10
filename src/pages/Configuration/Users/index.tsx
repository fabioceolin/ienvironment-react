import React, { useState, useEffect } from "react";

import MUIDataTable, { MUIDataTableMeta } from "mui-datatables";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import Base from "../../../components/Base";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";

import api from "../../../services/api";

import { UserStatus } from "./styles";

interface userData {
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

const EnvironmentEdit: React.FC = () => {
  const [users, setUsers] = useState<userData[]>([]);

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        paper: "#3a3743",
      },
      primary: {
        main: "#ff9000 ",
      },
    },
    overrides: {
      MuiTableCell: {
        head: {
          fontWeight: "bold",
          fontSize: "12px",
          color: "#fff",
        },
      },
    },
  });

  const columns = [
    { label: "Nome", name: "name" },
    { label: "Usuário", name: "login" },
    { label: "E-mail", name: "email" },
    {
      label: "Status",
      name: "enabled",
      options: {
        filter: true,
        customBodyRender: (
          value: any,
          tableMeta: MUIDataTableMeta,
          updateValue: Function
        ) => {
          return (
            <UserStatus
              isEnabled={!value}
              onClick={() => {
                updateValue(value ? true : false);
              }}
            >
              {value ? "Ativado" : "Desativado"}
            </UserStatus>
          );
        },
      },
    },
  ];

  useEffect(() => {
    api.get("/users").then((response) => {
      // console.log(response);
      setUsers(response.data);
    });
  }, []);

  return (
    <Base>
      <GridContainer>
        <GridItem sm={12}>
          <MuiThemeProvider theme={theme}>
            <MUIDataTable
              title={"Usuários"}
              data={users}
              columns={columns}
              options={{
                filterType: "checkbox" as any,
                responsive: "simple",
              }}
            />
          </MuiThemeProvider>
        </GridItem>
      </GridContainer>
    </Base>
  );
};

export default EnvironmentEdit;

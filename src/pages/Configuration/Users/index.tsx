import React from "react";

import MUIDataTable, { MUIDataTableMeta } from "mui-datatables";

import Base from "../../../components/Base";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { UserStatus } from "./styles";

const EnvironmentEdit: React.FC = () => {
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
    { label: "Nome", name: "nome" },
    { label: "Usuário", name: "usuario" },
    {
      label: "Status",
      name: "status",
      options: {
        filter: true,
        customBodyRender: (
          value: any,
          tableMeta: MUIDataTableMeta,
          updateValue: Function
        ) => {
          return (
            <UserStatus
              isEnabled={value}
              onClick={() => {
                updateValue(value ? false : true);
              }}
            >
              {value ? "Desativado" : "Ativado"}
            </UserStatus>
          );
        },
      },
    },
  ];
  const data = [
    {
      nome: "Fábio Ceolin",
      usuario: "fabioceolin",
      status: true,
    },
    {
      nome: "Mateus Moura Santos",
      usuario: "mateusms",
      status: true,
    },
    {
      nome: "Matheus Barreto",
      usuario: "MateusB",
      status: false,
    },
  ];

  return (
    <Base>
      <GridContainer>
        <GridItem sm={12}>
          <MuiThemeProvider theme={theme}>
            <MUIDataTable
              title={"Usuários"}
              data={data}
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

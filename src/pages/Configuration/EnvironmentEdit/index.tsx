import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import MUIDataTable from "mui-datatables";

import Base from "../../../components/Base";
import Card from "../../../components/Card";
import CustomToolbar from "./CustomToolbar";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { FaWindowClose } from "react-icons/fa";

import noimage from "../../../assets/noimage.png";

import api from "../../../services/api";

import {
  HeaderContainer,
  HeaderContent,
  Icons,
  Container,
  Content,
} from "./styles";

interface ParamsProps {
  environmentID: string;
}

interface ImageProps {
  _id: string;
  name: string;
  size: number;
  key: string;
  url: string;
  createdAt: string;
}

interface AmbienteInfoProps {
  equipments: Array<string>;
  events: Array<string>;
  numberOfEquipments: number;
  equipmentsOnline: 0;
  img: ImageProps;
  enabled: boolean;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface EquipamentoProps {
  connected: boolean;
  currentValue: string;
  img: ImageProps;
  enabled: boolean;
  simulationMode: boolean;
  name: string;
  description: string;
  type: string;
  entityType: string;
  createdAt: string;
  updatedAt: string;
  topic: string;
  id: string;
}

interface EventoProps {
  name: string;
  description: string;
  topic: string;
  script: string;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
  id: string;
}

interface responseData {
  ambienteinfo: AmbienteInfoProps;
  equipamentos: Array<EquipamentoProps>;
  eventos: Array<EventoProps>;
}

const EnvironmentEdit: React.FC = () => {
  const [environment, setEnvironment] = useState<responseData>();

  const { environmentID } = useParams<ParamsProps>();
  const history = useHistory();

  const handleNewEquipment = () => {
    history.push(`/configuration/environment/edit/${environmentID}/equipment`);
  };

  const handleNewEvent = () => {
    history.push(`/configuration/environment/edit/${environmentID}/event`);
  };

  const handleEnvironmentConfig = () => {
    history.push(`/configuration/environment`);
  };

  useEffect(() => {
    api.get(`/environments/fulldata/${environmentID}`).then((response) => {
      setEnvironment(response.data);
    });
  }, [environmentID]);

  const theme = createMuiTheme({
    palette: {
      type: "dark",
      background: {
        paper: "#312e38",
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
    { label: "Caracteristica", name: "type" },
    { label: "Tipo", name: "entityType" },
    { label: "Tópico MQTT", name: "topic" },
  ];

  const columnsEvents = [
    { label: "Nome", name: "name" },
    { label: "Descrição", name: "description" },
    { label: "Tópico MQTT", name: "topic" },
  ];

  return (
    <Base>
      <GridContainer>
        {environment && (
          <GridItem sm={12}>
            <Card>
              <HeaderContainer>
                <HeaderContent>
                  {environment.ambienteinfo.img ? (
                    <img src={environment.ambienteinfo.img.url} alt="" />
                  ) : (
                    <img src={noimage} alt="" />
                  )}
                  <div>
                    <h1>{environment.ambienteinfo.name}</h1>
                    <p>{environment.ambienteinfo.description}</p>
                  </div>
                </HeaderContent>
                <Icons>
                  <FaWindowClose
                    onClick={handleEnvironmentConfig}
                    size={25}
                    color="#ff9000"
                  />
                </Icons>
              </HeaderContainer>
              <Container>
                <Content>
                  <MuiThemeProvider theme={theme}>
                    <MUIDataTable
                      title={"Equipamentos"}
                      data={environment.equipamentos}
                      columns={columns}
                      options={{
                        filterType: "checkbox" as any,
                        responsive: "simple",
                        customToolbar: () => {
                          return (
                            <CustomToolbar
                              toggle={handleNewEquipment}
                              tooltip="Adicionar equipamento"
                            />
                          );
                        },
                        onRowsDelete: (rowsDeleted) => {
                          console.log(rowsDeleted);
                          rowsDeleted.data.map((ref) => console.log(ref.index));
                        },
                      }}
                    />
                  </MuiThemeProvider>
                </Content>
              </Container>
              <Container>
                <Content>
                  <MuiThemeProvider theme={theme}>
                    <MUIDataTable
                      title={"Eventos"}
                      data={environment.eventos}
                      columns={columnsEvents}
                      options={{
                        filterType: "checkbox" as any,
                        responsive: "simple",
                        customToolbar: () => {
                          return (
                            <CustomToolbar
                              toggle={handleNewEvent}
                              tooltip="Adicionar evento"
                            />
                          );
                        },
                      }}
                    />
                  </MuiThemeProvider>
                </Content>
              </Container>
            </Card>
          </GridItem>
        )}
      </GridContainer>
    </Base>
  );
};

export default EnvironmentEdit;

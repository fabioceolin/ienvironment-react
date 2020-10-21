import React, { useRef, useState } from "react";

import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import MUIDataTable from "mui-datatables";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import { FaWindowClose, FaEdit } from "react-icons/fa";

import Base from "../../../components/Base";
import Button from "../../../components/Button";
import Card from "../../../components/Card";
import CustomToolbar from "./CustomToolbar";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";
import Input from "../../../components/Input";
import Modal from "../../../components/Modal";
import Select from "../../../components/Select";
import useModal from "../../../hooks/modal";

import environmentImg from "../../../assets/sala.jpg";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import {
  HeaderContainer,
  HeaderContent,
  Icons,
  Container,
  Content,
  ModalContent,
  ContainerButton,
} from "./styles";

function getSteps() {
  return ["Geral", "Target", "Source"];
}

const EnvironmentEdit: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit = () => {
    console.log("Chamou submit");
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
    { label: "Nome", name: "nome" },
    { label: "Caracteristica", name: "caracteristica" },
    { label: "Tipo", name: "tipo" },
    { label: "Tópico MQTT", name: "topicoMQTT" },
  ];
  const data = [
    {
      nome: "Temperatura",
      caracteristica: "Sensor",
      tipo: "string",
      topicoMQTT: "valores/temp",
    },
    {
      nome: "Umidade",
      caracteristica: "Sensor",
      tipo: "string",
      topicoMQTT: "valores/umi",
    },
    {
      nome: "Luminosidade",
      caracteristica: "Sensor",
      tipo: "string",
      topicoMQTT: "valores/lum",
    },
    {
      nome: "Presença",
      caracteristica: "Sensor",
      tipo: "boolean",
      topicoMQTT: "valores/pres",
    },
    {
      nome: "Rele lampada",
      caracteristica: "Atuador",
      tipo: "boolean",
      topicoMQTT: "valores/releLamp",
    },
    {
      nome: "Rele Ar Condicionado",
      caracteristica: "Atuador",
      tipo: "string",
      topicoMQTT: "valores/arCondicionado",
    },
    {
      nome: "Rele Ar Condicionado",
      caracteristica: "Atuador",
      tipo: "string",
      topicoMQTT: "valores/arCondicionado",
    },
    {
      nome: "Rele Ar Condicionado",
      caracteristica: "Atuador",
      tipo: "string",
      topicoMQTT: "valores/arCondicionado",
    },
    {
      nome: "Rele Ar Condicionado",
      caracteristica: "Atuador",
      tipo: "string",
      topicoMQTT: "valores/arCondicionado",
    },
    {
      nome: "Rele Ar Condicionado",
      caracteristica: "Atuador",
      tipo: "string",
      topicoMQTT: "valores/arCondicionado",
    },
    {
      nome: "Rele Ar Condicionado",
      caracteristica: "Atuador",
      tipo: "string",
      topicoMQTT: "valores/arCondicionado",
    },
  ];

  const dataEvents = [
    {
      nome: "Luz com sensor",
      descricao: "Ligar a luz quando o sensor for  maior que 10",
      topicoMQTT: "valores/valor",
    },
    {
      nome: "Alterar ar-condicionado",
      descricao: "Muda o estado do ar condicionado conforme temperatura",
      topicoMQTT: "valores/umi",
    },
  ];

  const columnsEvents = [
    { label: "Nome", name: "nome" },
    { label: "Descrição", name: "descricao" },
    { label: "Tópico MQTT", name: "topicoMQTT" },
  ];

  const { isShowing, toggle } = useModal();
  const { isShowing: isa, toggle: tg } = useModal();

  return (
    <Base>
      <GridContainer>
        <GridItem sm={12}>
          <Card>
            <HeaderContainer>
              <HeaderContent>
                <img src={environmentImg} alt="" />
                <div>
                  <h1>Sala 01</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </HeaderContent>
              <Icons>
                <FaEdit size={25} color="#ff9000" />
                <FaWindowClose size={25} color="#ff9000" />
              </Icons>
            </HeaderContainer>
            <Container>
              <Content>
                <MuiThemeProvider theme={theme}>
                  <MUIDataTable
                    title={"Equipamentos"}
                    data={data}
                    columns={columns}
                    options={{
                      filterType: "checkbox" as any,
                      responsive: "simple",
                      customToolbar: () => {
                        return (
                          <CustomToolbar
                            toggle={toggle}
                            tooltip="Adicionar equipamento"
                          />
                        );
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
                    data={dataEvents}
                    columns={columnsEvents}
                    options={{
                      filterType: "checkbox" as any,
                      responsive: "simple",
                      customToolbar: () => {
                        return (
                          <CustomToolbar
                            toggle={tg}
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
      </GridContainer>
      <Modal isShowing={isShowing} hide={toggle}>
        <GridContainer>
          <GridItem sm={12}>
            <Card>
              <ModalContent>
                <Form ref={formRef} onSubmit={handleSubmit}>
                  <h1>Equipamento</h1>

                  <Input name="nome" icon={FaEdit} placeholder="Nome" />
                  <Input
                    name="descricao"
                    icon={FaEdit}
                    placeholder="Descrição"
                  />
                  <Select
                    name="caracteristica"
                    icon={FaEdit}
                    placeholder="Caracteristica"
                    options={[
                      { value: "0", label: "Sensor" },
                      { value: "1", label: "Atuador" },
                    ]}
                  />
                  <Select
                    name="tipo"
                    icon={FaEdit}
                    placeholder="Tipo"
                    options={[
                      { value: "boolean", label: "Boolean" },
                      { value: "float", label: "Float" },
                      { value: "int", label: "Int" },
                      { value: "string", label: "String" },
                    ]}
                  />
                  <Input
                    name="topico"
                    icon={FaEdit}
                    placeholder="Tópico MQTT"
                  />

                  <Button type="submit">Adicionar</Button>
                </Form>
              </ModalContent>
            </Card>
          </GridItem>
        </GridContainer>
      </Modal>
      <Modal isShowing={isa} hide={tg}>
        <GridContainer>
          <GridItem sm={12}>
            <Card>
              <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <h3>Todos os passos completo!</h3>
                    <Button onClick={handleReset}>Reset</Button>
                  </div>
                ) : (
                  <ModalContent>
                    <Form ref={formRef} onSubmit={handleSubmit}>
                      {activeStep === 0 && (
                        <div>
                          <Input name="nome" icon={FaEdit} placeholder="Nome" />
                          <Input
                            name="descricao"
                            icon={FaEdit}
                            placeholder="Descrição"
                          />
                          <Input
                            name="topico"
                            icon={FaEdit}
                            placeholder="Tópico MQTT"
                          />
                        </div>
                      )}
                    </Form>
                    <ContainerButton>
                      <Button disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button>
                      <Button onClick={handleNext}>
                        {activeStep === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </ContainerButton>
                  </ModalContent>
                )}
              </div>
            </Card>
          </GridItem>
        </GridContainer>
      </Modal>
    </Base>
  );
};

export default EnvironmentEdit;

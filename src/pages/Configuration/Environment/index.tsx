import React from "react";

import Base from "../../../components/Base";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";
import Card from "../../../components/Card";

import { FaEdit } from "react-icons/fa";

import {
  SubHeader,
  Button,
  CardHeader,
  CardContent,
  CardFooter,
} from "./styles";

const EnvironmentConfig: React.FC = () => {
  return (
    <Base>
      <GridContainer>
        <GridItem sm={12}>
          <SubHeader>
            <Button>Novo Ambiente</Button>
          </SubHeader>
        </GridItem>
        <GridItem xs={12} sm={6} lg={4}>
          <Card>
            <CardHeader>
              <h1>Sala 01</h1>
              <FaEdit size={20} />
            </CardHeader>
            <CardContent>
              <p>Descrição da sala com o que você quiser escrever</p>
            </CardContent>
            <CardFooter isNotEnabled>Desativado</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} lg={4}>
          <Card>
            <CardHeader>
              <h1>Sala 02</h1>
              <FaEdit size={20} />
            </CardHeader>
            <CardContent>
              <p>Descrição da sala com o que você quiser escrever</p>
            </CardContent>
            <CardFooter>Ativado</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} lg={4}>
          <Card>
            <CardHeader>
              <h1>Sala 03</h1>
              <FaEdit size={20} />
            </CardHeader>
            <CardContent>
              <p>Descrição da sala com o que você quiser escrever</p>
            </CardContent>
            <CardFooter>Ativado</CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} lg={4}>
          <Card>
            <CardHeader>
              <h1>Sala 03</h1>
              <FaEdit size={20} />
            </CardHeader>
            <CardContent>
              <p>Descrição da sala com o que você quiser escrever</p>
            </CardContent>
            <CardFooter>Ativado</CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </Base>
  );
};

export default EnvironmentConfig;

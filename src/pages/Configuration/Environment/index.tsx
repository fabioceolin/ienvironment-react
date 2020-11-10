import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Base from "../../../components/Base";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";
import Card from "../../../components/Card";

import { FaEdit } from "react-icons/fa";

import api from "../../../services/api";

import {
  SubHeader,
  Button,
  CardHeader,
  CardContent,
  CardFooter,
} from "./styles";

interface responseData {
  id: string;
  name: string;
  description: string;
  img: string;
  equipmentsOnline: number;
  numberOfEquipments: number;
  equipments: Array<string>;
  events: Array<string>;
  enabled: boolean;
  createdAt: string;
  updatedAt: string;
}

const EnvironmentConfig: React.FC = () => {
  const [environments, setEnvironments] = useState<responseData[]>([]);

  const history = useHistory();
  const handleNewEnvironment = () => {
    history.push("/configuration/environment/new");
  };
  const handleEditEnvironment = () => {
    history.push("/configuration/environment/edit");
  };

  useEffect(() => {
    api.get("/environments").then((response) => {
      setEnvironments(response.data);
    });
  }, []);

  return (
    <Base>
      <GridContainer>
        <GridItem sm={12}>
          <SubHeader>
            <Button onClick={handleNewEnvironment}>Novo Ambiente</Button>
          </SubHeader>
        </GridItem>
        {/* <GridItem xs={12} sm={6} lg={4}>
          <Card>
            <CardHeader>
              <h1>Sala 01</h1>
              <FaEdit size={20} onClick={handleEditEnvironment} />
            </CardHeader>
            <CardContent>
              <p>Descrição da sala com o que você quiser escrever</p>
            </CardContent>
            <CardFooter isNotEnabled>Desativado</CardFooter>
          </Card>
        </GridItem> */}
        {environments &&
          environments.map((environment) => (
            <GridItem xs={12} sm={6} lg={4} key={environment.id}>
              <Card>
                <CardHeader>
                  <h2>{environment.name}</h2>
                  <div>
                    <FaEdit size={20} onClick={handleEditEnvironment} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{environment.description}</p>
                </CardContent>
                {environment.enabled ? (
                  <CardFooter>Ativado</CardFooter>
                ) : (
                  <CardFooter isNotEnabled>Desativado</CardFooter>
                )}
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </Base>
  );
};

export default EnvironmentConfig;

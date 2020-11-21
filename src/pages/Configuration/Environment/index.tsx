import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Base from "../../../components/Base";
import GridContainer from "../../../components/GridContainer";
import GridItem from "../../../components/GridItem";
import Card from "../../../components/Card";

import { FaEdit, FaPlay } from "react-icons/fa";

import api from "../../../services/api";

import {
  SubHeader,
  Button,
  CardHeader,
  CardContent,
  CardFooter,
  TextFooter,
  IconFooter,
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

  const handleEditEnvironment = (environmentID: string = "-1") => {
    history.push(`/configuration/environment/new/${environmentID}`);
  };
  const handleConfigEnvironment = (environmentID: string = "-1") => {
    history.push(`/configuration/environment/edit/${environmentID}`);
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
            <Button onClick={() => handleEditEnvironment()}>
              Novo Ambiente
            </Button>
          </SubHeader>
        </GridItem>
        {environments &&
          environments.map((environment) => (
            <GridItem xs={12} sm={6} lg={4} key={environment.id}>
              <Card>
                <CardHeader>
                  <h2>{environment.name}</h2>
                  <div>
                    <FaEdit
                      size={20}
                      onClick={() => handleEditEnvironment(environment.id)}
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <p>{environment.description}</p>
                </CardContent>
                <CardFooter>
                  {environment.enabled ? (
                    <TextFooter isEnabled>Ativado</TextFooter>
                  ) : (
                    <TextFooter>Desativado</TextFooter>
                  )}
                  <IconFooter
                    onClick={() => handleConfigEnvironment(environment.id)}
                  >
                    <FaPlay size={10} />
                  </IconFooter>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </Base>
  );
};

export default EnvironmentConfig;

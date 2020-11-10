import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Base from "../../components/Base";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";

import { FaPlay } from "react-icons/fa";

import environmentImg from "../../assets/sala.jpg";
import noimage from "../../assets/noimage.png";

import api from "../../services/api";

import {
  Card,
  CardHeader,
  CardBody,
  CardDescription,
  CardFooter,
  Preview,
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

const Dashboard: React.FC = () => {
  const [environments, setEnvironments] = useState<responseData[]>([]);
  const history = useHistory();

  function handleEnvironmetClick() {
    history.push("/dashboard");
  }

  useEffect(() => {
    api.get("/environments/actives").then((response) => {
      setEnvironments(response.data);
    });
  }, []);

  return (
    <Base>
      <GridContainer>
        {environments &&
          environments.map((environment) => (
            <GridItem xs={12} sm={6} md={4} key={environment.id}>
              <Card>
                <CardHeader>
                  {environment.img ? (
                    <Preview src={environmentImg} />
                  ) : (
                    <Preview src={noimage} />
                  )}
                </CardHeader>
                <CardBody>
                  <h2>{environment.name}</h2>
                  <CardDescription>{environment.description}</CardDescription>
                  <div>
                    <span>
                      <small>Ativos:</small> {environment.equipmentsOnline}
                    </span>
                    <span>
                      <small>Desativados:</small> {environment.equipmentsOnline}
                    </span>
                    <span>
                      <small>Sem conexão:</small>{" "}
                      {environment.numberOfEquipments}
                    </span>
                  </div>
                </CardBody>
                <CardFooter>
                  <h4>Mais detalhes</h4>
                  <div onClick={handleEnvironmetClick}>
                    <FaPlay />
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>
              <Preview src={environmentImg} />
            </CardHeader>
            <CardBody>
              <h2>Sala Sala Sala Sala Sala Sala Sala Sala 01</h2>
              <CardDescription>
                Essa é a descrição da sala onde você pode informar alguma coisa
                para descrever melhor o ambiente caso alguem tenha dúvida de
                qual é o ambiente. Informações como apelido da sala, localização
                Essa é a descrição da sala onde você pode informar alguma coisa
                para descrever melhor o ambiente caso alguem tenha dúvida de
                qual é o ambiente. Informações como apelido da sala,
                localização...
              </CardDescription>
              <div>
                <span>
                  <small>Ativos:</small> 128
                </span>
                <span>
                  <small>Desativados:</small> 128
                </span>
                <span>
                  <small>Sem conexão:</small> 128
                </span>
              </div>
            </CardBody>
            <CardFooter>
              <h4>Mais detalhes</h4>
              <div onClick={handleEnvironmetClick}>
                <FaPlay />
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </Base>
  );
};

export default Dashboard;

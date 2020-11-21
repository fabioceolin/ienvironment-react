import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Base from "../../components/Base";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";

import { FaPlay } from "react-icons/fa";

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

interface FileResponseProps {
  _id: string;
  name: string;
  size: number;
  key: string;
  url: string;
  createdAt: string;
  _v: number;
}

interface responseData {
  id: string;
  name: string;
  description: string;
  img: FileResponseProps;
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

  function handleEnvironmetClick(ID: string) {
    history.push(`/dashboard/${ID}`);
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
                    <Preview src={environment.img.url} />
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
                  <div onClick={() => handleEnvironmetClick(environment.id)}>
                    <FaPlay />
                  </div>
                </CardFooter>
              </Card>
            </GridItem>
          ))}
      </GridContainer>
    </Base>
  );
};

export default Dashboard;

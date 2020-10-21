import React from "react";
import { useHistory } from "react-router-dom";

import Base from "../../components/Base";
import GridContainer from "../../components/GridContainer";
import GridItem from "../../components/GridItem";

import { FaPlay } from "react-icons/fa";

import environmentImg from "../../assets/sala.jpg";

import { Card, CardHeader, CardBody, CardFooter } from "./styles";

const Dashboard: React.FC = () => {
  const history = useHistory();

  function handleEnvironmetClick() {
    history.push("/dashboard");
  }

  return (
    <Base>
      <GridContainer>
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>
              <img src={environmentImg} alt="Environment" />
            </CardHeader>
            <CardBody>
              <h2>
                <strong>Sala 01</strong>
              </h2>
              <span>
                Essa é a descrição da sala onde você pode informar alguma coisa
                para descrever melhor o ambiente caso alguem tenha dúvida de
                qual é o ambiente. Informações como apelido da sala,
                localização...
              </span>
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
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>
              <img src={environmentImg} alt="Environment" />
            </CardHeader>
            <CardBody>
              <h2>
                <strong>Sala 02</strong>
              </h2>
              <span>
                Essa é a descrição da sala onde você pode informar alguma coisa
                para descrever melhor o ambiente caso alguem tenha dúvida de
                qual é o ambiente. Informações como apelido da sala,
                localização...
              </span>
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
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>
              <img src={environmentImg} alt="Environment" />
            </CardHeader>
            <CardBody>
              <h2>
                <strong>Sala 03</strong>
              </h2>
              <span>
                Essa é a descrição da sala onde você pode informar alguma coisa
                para descrever melhor o ambiente caso alguem tenha dúvida de
                qual é o ambiente. Informações como apelido da sala,
                localização...
              </span>
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
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>
              <img src={environmentImg} alt="Environment" />
            </CardHeader>
            <CardBody>
              <h2>
                <strong>Sala 03</strong>
              </h2>
              <span>
                Essa é a descrição da sala onde você pode informar alguma coisa
                para descrever melhor o ambiente caso alguem tenha dúvida de
                qual é o ambiente. Informações como apelido da sala,
                localização...
              </span>
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
        <GridItem xs={12} sm={6} md={4}>
          <Card>
            <CardHeader>
              <img src={environmentImg} alt="Environment" />
            </CardHeader>
            <CardBody>
              <h2>
                <strong>Sala 03</strong>
              </h2>
              <span>
                Essa é a descrição da sala onde você pode informar alguma coisa
                para descrever melhor o ambiente caso alguem tenha dúvida de
                qual é o ambiente. Informações como apelido da sala,
                localização...
              </span>
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

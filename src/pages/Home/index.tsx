import React, { useState, useCallback } from "react";
import { Scrollbars } from "react-custom-scrollbars";

import { useSidebar } from "../../hooks/sidebar";

import { FaBars } from "react-icons/fa";

import Sidebar from "../../components/Sidebar";
import Fab from "@material-ui/core/Fab";

import environmentImg from "../../assets/environment.svg";

import {
  Container,
  Main,
  Grid,
  Card,
  Content,
  ContentImage,
  ContentTitle,
} from "./styles";

const Dashboard: React.FC = () => {
  const { handleToggleSidebar } = useSidebar();

  return (
    <Container>
      <Sidebar />
      <Main>
        <div className="btn-hidden" onClick={() => handleToggleSidebar(true)}>
          <Fab
            size="small"
            color="inherit"
            className="btn-color-primary"
            aria-label="Menu"
          >
            <FaBars />
          </Fab>
        </div>
        <Scrollbars>
          <Grid>
            <Card>
              <Content>
                <ContentImage>
                  <img src={environmentImg} alt="Environment" />
                </ContentImage>
                <div>
                  <ContentTitle>
                    <strong>Sala 01</strong>
                  </ContentTitle>
                  <span>Ativos: 128</span>
                  <span>Desativados: 128</span>
                  <span>Sem conexão: 128</span>
                </div>
              </Content>
            </Card>
            <Card>
              <Content>
                <ContentImage>
                  <img src={environmentImg} alt="Environment" />
                </ContentImage>
                <div>
                  <ContentTitle>
                    <strong>Sala 02</strong>
                  </ContentTitle>
                  <span>Ativos: 128</span>
                  <span>Desativados: 128</span>
                  <span>Sem conexão: 128</span>
                </div>
              </Content>
            </Card>
            <Card>
              <Content>
                <ContentImage>
                  <img src={environmentImg} alt="Environment" />
                </ContentImage>
                <div>
                  <ContentTitle>
                    <strong>Sala 03</strong>
                  </ContentTitle>
                  <span>Ativos: 128</span>
                  <span>Desativados: 128</span>
                  <span>Sem conexão: 128</span>
                </div>
              </Content>
            </Card>
            <Card>
              <Content>
                <ContentImage>
                  <img src={environmentImg} alt="Environment" />
                </ContentImage>
                <div>
                  <ContentTitle>
                    <strong>Sala 04</strong>
                  </ContentTitle>
                  <span>Ativos: 128</span>
                  <span>Desativados: 128</span>
                  <span>Sem conexão: 128</span>
                </div>
              </Content>
            </Card>
            <Card>
              <Content>
                <ContentImage>
                  <img src={environmentImg} alt="Environment" />
                </ContentImage>
                <div>
                  <ContentTitle>
                    <strong>Sala 05</strong>
                  </ContentTitle>
                  <span>Ativos: 128</span>
                  <span>Desativados: 128</span>
                  <span>Sem conexão: 128</span>
                </div>
              </Content>
            </Card>
          </Grid>
        </Scrollbars>
      </Main>
    </Container>
  );
};

export default Dashboard;

import styled, { keyframes, css } from "styled-components";
import { shade } from "polished";

import { ProSidebar, SidebarHeader, MenuItem } from "react-pro-sidebar";

interface FooterIconsProps {
  isCollapsed: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1%;
  overflow-y: auto;

  .btn-hidden {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 50;
  }
`;

export const Grid = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr; /* 1º coluna ocupa 2 vezes o tamanho */
  flex: 1;
  height: 100vh;
  gap: 10px;
  margin-right: 10px;
  margin-left: 10px;

  section {
    min-height: 300px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);

    .btn-hidden {
      visibility: hidden;
    }
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);

    .btn-hidden {
      visibility: hidden;
    }
  }
`;

export const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${shade(-0.2, "#312e38")};
`;

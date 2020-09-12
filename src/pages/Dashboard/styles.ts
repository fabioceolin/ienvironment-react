import styled from "styled-components";
import { shade } from "polished";

interface FooterIconsProps {
  isCollapsed: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.main`
  flex: 1;
  overflow-y: auto;
  height: 100vh;

  @media (min-width: 768px) {
    .btn-hidden {
      visibility: hidden;
    }
  }
  @media (min-width: 1200px) {
    .btn-hidden {
      visibility: hidden;
    }
  }

  .btn-hidden {
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 50;
  }

  .btn-color-primary {
    background-color: #ff9000;
    &:hover {
      background-color: ${shade(0.2, "#ff9000")};
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  flex: 1;
  height: 100vh;
  gap: 10px;
  margin-right: 10px;
  margin-left: 10px;

  section {
    min-height: 300px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${shade(-0.2, "#312e38")};
`;

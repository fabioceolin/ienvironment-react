import styled from "styled-components";
import { shade } from "polished";

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

import styled from "styled-components";
import { shade } from "polished";

import environmentImg from "../../assets/environment.svg";

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
  grid-template-columns: 1fr;
  gap: 30px;
  margin: 30px;

  section {
    min-height: 200px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  background-color: ${shade(-0.2, "#312e38")};
  padding: 40px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    background-color: ${shade(-0.4, "#312e38")};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;

  line-height: 1.5rem;

  div + div {
    display: flex;
    flex-direction: column;
    width: 100%;

    letter-spacing: 1.5px;

    margin-left: 20px;

    span {
      white-space: nowrap;
      overflow: hidden;
    }
  }

  @media (max-width: 440px) {
    img {
      display: none;
    }

    div + div {
      margin-left: 0px;
    }
  }
`;

export const ContentImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 250px;

  overflow: hidden;
  box-shadow: 0px 0px 38px 1px rgba(0, 0, 0, 0.75);

  background-color: ${shade(-0.2, "#312e38")};

  img {
    height: 100%;
    width: 100%;
    padding: 10px;
  }
`;

export const ContentTitle = styled.span`
  font-size: 30px;
  margin-bottom: 2rem;
`;

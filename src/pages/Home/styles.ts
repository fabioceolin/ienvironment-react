import styled from "styled-components";

interface FooterIconsProps {
  isCollapsed: boolean;
}

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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  background-color: var(--color-box-base);
  margin: 30px 0;
  border-radius: 5px;
`;

export const CardHeader = styled.div`
  margin: -30px 15px 0 15px;

  img {
    width: 100%;
    box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
      0 8px 10px -5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    vertical-align: middle;
  }
`;

export const CardBody = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 1rem 20px;

  span {
    margin-top: 10px;
    font-size: 12px;
    color: var(--color-text-secundary);
    text-align: justify;
  }
  div {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);

    margin-top: 10px;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      font-size: 14px;
    }
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px 15px;
  padding: 10px 10px 0 10px;
  border-top: 1px solid var(--color-box-line-footer);
  line-height: 22px;
  color: var(--color-text-secundary);
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 50%;
    background-color: var(--color-primary);
    cursor: pointer;

    &:hover {
      background-color: var(--color-primary-dark);
      transition: background-color 0.2s;
    }

    svg {
      color: #fff;
    }
  }
`;

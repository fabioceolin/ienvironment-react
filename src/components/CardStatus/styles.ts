import styled, { css } from "styled-components";

interface CardIconProps {
  type?: "success" | "warning" | "danger" | "info";
}

const cardIconTypeVariations = {
  success: css`
    background: linear-gradient(60deg, #66bb6a, #43a047);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
      0 7px 10px -5px rgba(76, 175, 80, 0.4);
  `,
  warning: css`
    background: linear-gradient(60deg, #ffa726, #fb8c00);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
      0 7px 10px -5px rgba(255, 152, 0, 0.4);
  `,
  danger: css`
    background: linear-gradient(60deg, #ef5350, #e53935);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
      0 7px 10px -5px rgba(244, 67, 54, 0.4);
  `,
  info: css`
    background: linear-gradient(60deg, #26c6da, #00acc1);
    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.14),
      0 7px 10px -5px rgba(0, 172, 193, 0.4);
  `,
};

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #3a3743;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
  border-radius: 5px;
  margin: 30px 0;
  width: 100%;
`;

export const CardHeader = styled.div`
  margin: 0 15px;
  text-align: right;
  p {
    color: #cccccc;
    padding-top: 10px;
    font-size: 14px;
  }

  h3 {
    font-size: 1.9rem;
  }
`;

export const CardIcon = styled.div<CardIconProps>`
  ${(props) => cardIconTypeVariations[props.type || "info"]}

  float: left;
  margin-top: -15px;
  padding: 15px;
  border-radius: 5px;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 15px 15px;
  padding-top: 10px;
  border-top: 1px solid #27242c;
  line-height: 22px;
  color: #cccccc;
  font-size: 14px;

  div {
    display: flex;
    align-items: center;
  }

  svg {
    margin: 0 10px;
  }
`;

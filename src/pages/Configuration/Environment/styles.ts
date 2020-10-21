import styled, { css } from "styled-components";

interface CardFooterProps {
  isNotEnabled?: boolean;
}

export const SubHeader = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;
`;

export const Button = styled.button`
  background-color: var(--color-primary);
  border-radius: 5px;
  border: 0px;
  margin: 0 10px;
  padding: 10px;
  color: var(--color-text-button);

  &:hover {
    background-color: var(--color-primary-dark);
    transition: background-color 0.2s;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;

  svg {
    color: #cccccc;

    &:hover {
      color: var(--color-primary);
      transition: color 0.5s;
      cursor: pointer;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 10px 10px 20px 10px;
  color: var(--color-text-secundary);
`;

export const CardFooter = styled.div<CardFooterProps>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 15px 15px;
  padding: 10px 10px 0 0;
  border-top: 1px solid #27242c;
  line-height: 22px;
  font-size: 14px;
  ${(props) =>
    props.isNotEnabled
      ? css`
          color: #ec644b;
        `
      : css`
          color: #2ecc71;
        `}
`;

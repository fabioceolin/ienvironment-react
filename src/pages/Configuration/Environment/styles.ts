import styled, { css } from "styled-components";

interface CardFooterProps {
  isEnabled?: boolean;
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

  h2 {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  svg {
    color: #cccccc;
    margin-left: 5px;

    &:hover {
      color: var(--color-primary);
      transition: color 0.5s;
      cursor: pointer;
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  color: var(--color-text-secundary);

  p {
    height: 85px;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-align: justify;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
  padding: 10px 10px 0px 10px;
  border-top: 1px solid #27242c;
  line-height: 22px;
  font-size: 14px;
`;

export const TextFooter = styled.p<CardFooterProps>`
  ${({ isEnabled = false }) =>
    isEnabled
      ? css`
          color: #2ecc71;
        `
      : css`
          color: #ec644b;
        `}
`;

export const IconFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
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
`;

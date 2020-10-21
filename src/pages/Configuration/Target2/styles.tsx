import styled, { css } from "styled-components";

interface TdGroupProps {
  isStart?: boolean;
  isEnd?: boolean;
}

export const Fieldset = styled.fieldset`
  padding: 15px 0px;
  border: 0px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
`;

export const Td = styled.td`
  text-align: center;
`;

export const TdGroup = styled.td<TdGroupProps>`
  text-align: center;
  background-color: #27242c;
  border-left: 2px solid #000;
  width: 4px;
  ${(props) =>
    props.isStart &&
    css`
      border-top: 2px solid #000;
    `}
  ${(props) =>
    props.isEnd &&
    css`
      border-bottom: 2px solid #000;
    `}
`;

export const TdContent = styled.div`
  display: flex;
  justify-content: space-around;
  span {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 25px;
`;

export const Checkbox = styled.input`
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 25px;
`;

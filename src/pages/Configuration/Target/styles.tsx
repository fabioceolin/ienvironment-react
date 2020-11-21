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

// export const InputContainer = styled.div`
//   background: #232129;
//   border-radius: 5px;
//   width: 100%;
//   color: #666360;
//   display: flex;
//   align-items: center;
//   input {
//     flex: 1;
//     height: 25px;
//     background: transparent;
//     border-color: #000;
//     border-radius: 5px;
//     color: #f4ede8;
//     &::placeholder {
//       color: #666360;
//     }
//   }
// `;

export const Checkbox = styled.input`
  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  height: 25px;
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 3fr 4fr 3fr 6fr; /* 1º coluna ocupa 2 vezes o tamanho */
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;

export const Groups = styled.div`
  position: absolute;
`;

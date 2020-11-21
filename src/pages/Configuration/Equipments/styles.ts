import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  max-width: 100%;
  background-color: transparent;
  border-spacing: 0;

  th {
    position: sticky;
    top: 0;
    background-color: #ff9000;
    color: #fff;
    padding: 10px 0;

    &:first-child {
      border-radius: 4px 0 0 0;
    }

    &:last-child {
      border-radius: 0 4px 0 0;
    }
  }
`;

export const Tbody = styled.tbody`
  tr {
    cursor: pointer;
    td {
      text-align: center;
      padding: 10px 0;
    }
  }
`;

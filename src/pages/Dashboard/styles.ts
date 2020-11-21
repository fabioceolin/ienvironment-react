import styled from "styled-components";

export const Chart = styled.div`
  height: 400px;

  background-color: var(--color-box-base);
  padding: 20px 0;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;

  svg {
    margin-right: 5px;
  }

  span {
    font-size: 20px;
  }
`;

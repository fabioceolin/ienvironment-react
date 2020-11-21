import ReactSelect from "react-select";
import styled, { css } from "styled-components";

import Tooltip from "../Tooltip";

interface ConatinerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ConatinerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #232129;
  color: #666360;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  select {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }

    .select-block select {
      width: 100%;
      height: 5.6rem;
      margin-top: 0.8rem;
      border-radius: 0.8rem;
      background: var(--color-input-background);
      border: 1px solid var(--color-line-in-white);
      outline: 0;
      padding: 0 1.6rem;
      font: 1.6rem Archivo;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const MultiSelect = styled(ReactSelect)`
  &.select-container {
    width: 100%;
  }

  .select__control {
    background: transparent;
    border: 0px;
    box-shadow: none;
  }

  .select__value-container {
    padding-left: 0px;
  }

  .select__menu {
    background-color: #3a3743;
    color: #cccccc;
  }

  .select__option {
    background-color: #3a3743;
  }
  .select__option:hover {
    background-color: #232129;
  }

  .select__placeholder {
    color: #666360;
  }

  .select__single-value {
    color: #f4ede8;
  }
`;

import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: flex;
  margin: 25px;
  padding-top: 1.4rem;
  border: 0;
  flex-direction: column;
  align-items: center;

  legend {
    font: 500 2rem Roboto Slab;
    color: var(--color-text-title);
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--color-box-line-footer);
  }
`;

export const Legend = styled.legend`
  display: flex;
  justify-content: flex-start !important;

  svg {
    cursor: pointer;
    margin-right: 5px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  margin: 5px 25px 25px 25px;
  border: 0;
  flex-direction: column;
  align-items: center;
`;

export const CheckboxGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

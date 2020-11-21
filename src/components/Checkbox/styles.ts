import styled from "styled-components";

interface CheckboxProps {
  checked: boolean;
}

export const CheckboxContainer = styled.div<CheckboxProps>`
  height: 35px;
  padding: 0 10px;
  margin: 0px 4px;
  border-radius: 5px;
  cursor: pointer;

  background-color: #232129;

  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Text = styled.label<CheckboxProps>`
  cursor: pointer;
  color: ${(props) => (props.checked ? "#f4ede8" : "#666360")};
`;

export const StyledCheckbox = styled.label<CheckboxProps>`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  background: ${(props) => (props.checked ? "#ff9000" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;

  ${CheckboxContainer}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  svg {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

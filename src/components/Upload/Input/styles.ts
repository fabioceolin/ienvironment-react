import styled, { css } from "styled-components";

interface UploadMessageProps {
  type?: "success" | "error";
}
interface InputContainerProps {
  active?: boolean;
  reject?: boolean;
}

const messageColors = {
  default: "#ccc",
  error: "#bb2124",
  success: "#22bb33",
};

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  place-content: center;
  width: 100%;

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;

    & + label {
      display: flex;
      width: 100%;
      flex-direction: column;
      place-items: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: pointer;
      overflow: hidden;
      padding: 0.625rem 1.25rem;
    }
    & + label svg {
      width: 1em;
      height: 1em;
      vertical-align: middle;
      fill: currentColor;
      margin-top: -0.25em;
      margin-right: 0.25em;
    }
    ${(props) =>
      props.active &&
      css`
        & + label {
          color: #22bb33 !important;
        }
        & + label figure {
          background-color: #22bb33 !important;
        }
      `}
    ${(props) =>
      props.reject &&
      css`
        & + label {
          color: #bb2124 !important;
        }
        & + label figure {
          background-color: #bb2124 !important;
        }
      `}

    & + label {
      color: var(--color-primary);
    }

    & + label:hover {
      color: var(--color-primary-dark);
    }

    & + label figure {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: var(--color-primary);
      display: block;
      padding: 20px;
      margin: 0 auto 10px;
    }

    & + label:hover figure {
      background-color: var(--color-primary-dark);
    }

    & + label svg {
      width: 100%;
      height: 100%;
      fill: #fff;
    }
  }
`;

export const UploadMessage = styled.p<UploadMessageProps>`
  display: flex;
  color: ${(props) => messageColors[props.type || "default"]};
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`;

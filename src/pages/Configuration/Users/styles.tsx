import styled, { css } from "styled-components";

interface UserStatusProps {
  isEnabled?: boolean;
}

export const UserStatus = styled.div<UserStatusProps>`
  display: inline;
  padding: 5px;
  border: 2px solid;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  ${(props) =>
    props.isEnabled
      ? css`
          color: #ec644b;
        `
      : css`
          color: #2ecc71;
        `}
`;

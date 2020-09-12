import styled, { keyframes, css } from "styled-components";
import { shade } from "polished";

import { ProSidebar, SidebarHeader, MenuItem } from "react-pro-sidebar";

interface FooterIconsProps {
  isCollapsed: boolean;
}

export const ProSidebarStyled = styled(ProSidebar)`
  height: 100vh;

  .pro-sidebar-inner {
    background-color: ${shade(0.2, "#312e38")};
  }
  .pro-menu > ul > .pro-sub-menu > .pro-inner-list-item {
    background-color: ${shade(0.4, "#312e38")};
  }

  .pro-menu .pro-menu-item.active {
    color: #ff9000;
  }
`;

export const SidebarHeaderStyled = styled(SidebarHeader)`
  min-height: 75px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;

  img {
    width: 90%;
    height: 60px;
  }
`;

export const UserContainer = styled.div`
  border-top: 1px solid rgba(173, 173, 173, 0.2);
  border-bottom: 1px solid rgba(173, 173, 173, 0.2);

  display: flex;
  align-items: center;
  justify-content: center;
  height: 72px;
  padding: 10px;

  img {
    height: 50px;
    border-radius: 50%;
  }
  div {
    margin-left: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      white-space: nowrap;
      overflow: hidden;
    }
  }
`;

export const MenuItemStyled = styled(MenuItem)`
  div:hover span {
    color: #ff9000;
  }
`;

const rotateFromRight = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
`;

export const FooterIcons = styled.div<FooterIconsProps>`
  display: grid;
  grid-template-rows: 1fr; /* FR pega o espaço que sobrar */
  grid-template-columns: 1fr 1fr 1fr 1fr; /* 1º coluna ocupa 2 vezes o tamanho */

  div {
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 10px;

    &:hover {
      cursor: pointer;
      color: #ff9000;
    }

    ${(props) =>
      !props.isCollapsed &&
      css`
        &:nth-child(1) {
          svg {
            animation: ${rotateFromRight} 0.5s linear;
            transform: rotate(180deg);
          }
        }
      `}
  }
`;

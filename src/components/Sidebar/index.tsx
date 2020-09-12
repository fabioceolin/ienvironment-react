import React, { useState, useCallback } from "react";
import {
  SidebarFooter,
  SidebarContent,
  Menu,
  SubMenu,
} from "react-pro-sidebar";
import { Scrollbars } from "react-custom-scrollbars";

import {
  FaTh,
  FaHome,
  FaWrench,
  FaBell,
  FaCog,
  FaPowerOff,
  FaBackward,
} from "react-icons/fa";

import logoImg from "../../assets/logo.svg";
import logoSImg from "../../assets/logo_s.svg";
import avatarImg from "../../assets/mat.jpeg";

import "react-pro-sidebar/dist/css/styles.css";

import {
  ProSidebarStyled,
  SidebarHeaderStyled,
  MenuItemStyled,
  ImageContainer,
  UserContainer,
  FooterIcons,
} from "./styles";

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleCollapse = useCallback(() => {
    setIsCollapsed(!isCollapsed);
  }, [isCollapsed]);

  const handleToggleSidebar = useCallback(
    (value) => {
      setIsToggled(value);
    },
    [isToggled]
  );

  return (
    <ProSidebarStyled
      collapsed={isCollapsed}
      toggled={isToggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeaderStyled>
        <ImageContainer>
          <img src={isCollapsed ? logoSImg : logoImg} alt="iEnvironment" />
        </ImageContainer>
        <UserContainer>
          <img src={avatarImg} alt="User " />
          {!isCollapsed && (
            <div>
              <span>
                Mateus Moura
                <strong> Santos</strong>
              </span>
              <span> Administrator</span>
            </div>
          )}
        </UserContainer>
      </SidebarHeaderStyled>
      <SidebarContent>
        <Scrollbars autoHide>
          <Menu iconShape="square">
            <MenuItemStyled active icon={<FaHome />}>
              Home
            </MenuItemStyled>
            <MenuItemStyled icon={<FaTh />}>Overview</MenuItemStyled>
            <SubMenu title="Configuration" icon={<FaWrench />}>
              <MenuItemStyled>Environment</MenuItemStyled>
            </SubMenu>
          </Menu>
        </Scrollbars>
      </SidebarContent>
      <SidebarFooter>
        <FooterIcons isCollapsed={!isCollapsed}>
          <div onClick={handleToggleCollapse}>
            <FaBackward />
          </div>
          <div>
            <FaBell />
          </div>
          <div>
            <FaCog />
          </div>
          <div>
            <FaPowerOff />
          </div>
        </FooterIcons>
      </SidebarFooter>
    </ProSidebarStyled>
  );
};

export default Sidebar;

import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarFooter,
  SidebarContent,
  Menu,
  SubMenu,
} from "react-pro-sidebar";
import { Scrollbars } from "react-custom-scrollbars";

import { useAuth } from "../../hooks/auth";
import { useSidebar } from "../../hooks/sidebar";

import {
  FaTh,
  FaWrench,
  FaBell,
  FaCog,
  FaPowerOff,
  FaBackward,
} from "react-icons/fa";

import logoImg from "../../assets/logo.svg";
import logoSImg from "../../assets/logo_s.svg";
import avatarImg from "../../assets/user.svg";

import "react-pro-sidebar/dist/css/styles.css";

import {
  ProSidebarStyled,
  SidebarHeaderStyled,
  MenuItemStyled,
  ImageContainer,
  UserContainer,
  FooterIcons,
} from "./styles";

interface SidebarProps {
  name?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ name }) => {
  const {
    isCollapsed,
    isToggled,
    handleToggleSidebar,
    handleToggleCollapse,
  } = useSidebar();

  const { signOut } = useAuth();

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
              <span>{name ? name : "Unknown"}</span>
              <span style={{ color: "#666360" }}> Administrator</span>
            </div>
          )}
        </UserContainer>
      </SidebarHeaderStyled>
      <SidebarContent>
        <Scrollbars autoHide>
          <Menu iconShape="square">
            <MenuItemStyled active icon={<FaTh />}>
              Overview
              <Link to="/home" />
            </MenuItemStyled>
            <SubMenu title="Configuration" icon={<FaWrench />}>
              <MenuItemStyled>
                Environment
                <Link to="/configuration/environment" />
              </MenuItemStyled>
              <MenuItemStyled>
                Users
                <Link to="/configuration/users" />
              </MenuItemStyled>
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
          <div onClick={signOut}>
            <FaPowerOff />
          </div>
        </FooterIcons>
      </SidebarFooter>
    </ProSidebarStyled>
  );
};

export default Sidebar;

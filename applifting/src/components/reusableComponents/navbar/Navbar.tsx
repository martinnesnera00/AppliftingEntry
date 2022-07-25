import React from "react";
import { useLocation } from "react-router";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";

import {
  InnerContainer,
  LeftNavbarContainer,
  OuterContainer,
  RightNavbarContainer,
  StyledLink,
} from "./styled.Navbar";

import * as routes from "../../../routing/RouteConstants";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import { ProfileImage } from "../../styledComponents/Image";
import { logout } from "../../../slices/AuthSlice";
import { Alert } from "../alert/Alert";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const loggedIn = useAppSelector((state) => state.auth.loggedIn);
  const leftLinks = [routes.ARTICLES_LIST];
  const rightLinks = [routes.MY_ARTICLES_LIST, routes.NEW_ARTICLE_VIEW];

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <div onClick={() => dispatch(logout())}>Logout</div>,
        },
      ]}
    />
  );

  return (
    <OuterContainer>
      <InnerContainer>
        <LeftNavbarContainer>
          {leftLinks.map((route, index) => (
            <StyledLink
              key={index}
              to={route.path}
              selected={pathname.includes(route.path)}
            >
              {route.name}
            </StyledLink>
          ))}
        </LeftNavbarContainer>
        <RightNavbarContainer>
          {loggedIn ? (
            <>
              {rightLinks.map((route, index) => (
                <StyledLink
                  key={index}
                  to={route.path}
                  selected={pathname.includes(route.path)}
                >
                  {route.name}
                </StyledLink>
              ))}
              <Dropdown overlay={menu}>
                <DownOutlined />
              </Dropdown>
              <ProfileImage imageId={null} />
            </>
          ) : (
            <StyledLink
              to={routes.LOGIN.path}
              selected={pathname.includes(routes.LOGIN.path)}
            >
              {routes.LOGIN.name}
            </StyledLink>
          )}
        </RightNavbarContainer>
      </InnerContainer>
      <Alert />
    </OuterContainer>
  );
};

export default Navbar;

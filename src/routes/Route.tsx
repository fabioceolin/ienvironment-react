import React from "react";
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
  Redirect,
} from "react-router-dom";

import api from "../services/api";

import { useAuth } from "../hooks/auth";

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user, signOut, expirationTime } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (Date.now() >= Date.parse(expirationTime)) {
          signOut();
        }
        const token = localStorage.getItem("@iEnvironment:token");
        console.log(token);
        if (token) {
          api.defaults.headers.common["x-access-token"] = token;
        } else {
          api.defaults.headers.common["x-access-token"] = null;
        }
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/home",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;

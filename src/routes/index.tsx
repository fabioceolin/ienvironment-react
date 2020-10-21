import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import EnvironmentConfig from "../pages/Configuration/Environment";
import EnvironmentEdit from "../pages/Configuration/EnvironmentEdit";
import Users from "../pages/Configuration/Users";
import Target from "../pages/Configuration/Target";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route
        path="/configuration/environment"
        exact
        component={EnvironmentConfig}
        isPrivate
      />
      <Route
        path="/configuration/environment/edit"
        exact
        component={EnvironmentEdit}
        isPrivate
      />
      <Route path="/configuration/users" exact component={Users} isPrivate />
      <Route path="/configuration/target" exact component={Target} isPrivate />
    </Switch>
  );
};

export default Routes;

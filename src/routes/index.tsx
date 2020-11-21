import React from "react";
import { Switch } from "react-router-dom";

import Route from "./Route";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Equipments from "../pages/Configuration/Equipments";
import Environment from "../pages/Configuration/Environment";
import EnvironmentEdit from "../pages/Configuration/EnvironmentEdit";
import EnvironmentNew from "../pages/Configuration/EnvironmentNew";
import EquipmentNew from "../pages/Configuration/EquipmentNew";
import EventNew from "../pages/Configuration/EventNew";
import Users from "../pages/Configuration/Users";
import Target from "../pages/Configuration/Target";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/signup" component={SignUp} />

      <Route path="/home" component={Home} isPrivate />
      <Route path="/equipments" component={Equipments} isPrivate />
      <Route path="/dashboard/:environmentID" component={Dashboard} isPrivate />
      <Route
        path="/configuration/environment"
        exact
        component={Environment}
        isPrivate
      />
      <Route
        path="/configuration/environment/edit/:environmentID"
        exact
        component={EnvironmentEdit}
        isPrivate
      />
      <Route
        path="/configuration/environment/edit/:environmentID/equipment"
        exact
        component={EquipmentNew}
        isPrivate
      />
      <Route
        path="/configuration/environment/edit/:environmentID/event"
        exact
        component={EventNew}
        isPrivate
      />
      <Route
        path="/configuration/environment/new/:environmentID"
        exact
        component={EnvironmentNew}
        isPrivate
      />
      <Route path="/configuration/users" exact component={Users} isPrivate />
      <Route path="/configuration/target" exact component={Target} isPrivate />
    </Switch>
  );
};

export default Routes;

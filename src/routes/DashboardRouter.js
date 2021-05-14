import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { Home } from "../components/dashboard/home/Home";
import { Idea } from "../components/dashboard/idea/Idea";
import { Location } from "../components/dashboard/location/Location";
import { Security } from "../components/dashboard/security/Security";
import { Settings } from "../components/dashboard/settings/Settings";
import { Signal } from "../components/dashboard/signal/Signal";
import { Users } from "../components/dashboard/users/Users";

export const DashboardRouter = () => {
  return (
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/idea" component={Idea} />
      <Route exact path="/security" component={Security} />
      <Route exact path="/location" component={Location} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/signal" component={Signal} />

      <Redirect to="/home" />
    </Switch>
  );
};

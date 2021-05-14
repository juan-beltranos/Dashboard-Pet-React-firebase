import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { DashboardScreen } from "../pages/DashboardScreen";

import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" component={DashboardScreen} />

          <Redirect to="/auth/login" />
        </Switch>
      </>
    </Router>
  );
};

import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { LoginScreen } from "../pages/LoginScreen";
import { RegisterScreen } from "../pages/RegisterScreen";

import "../components/Auth/auth.css";

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />

        <Redirect to="/auth/login" />
      </Switch>
    </div>
  );
};

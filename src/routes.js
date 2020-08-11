import React, { Component } from "react";
import Layout from "./HOC/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/signin";

const routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route exact component={Home} path="/"></Route>
        <Route exact component={SignIn} path="/signin"></Route>
      </Switch>
    </Layout>
  );
};

export default routes;

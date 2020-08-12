import React from "react";
import Layout from "./HOC/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/signin";
import Dashboard from "./Components/admin/Dashboard";
import AddEditMatch from './Components/admin/matches/addEditMatch'

import AdminMatches from "./Components/admin/matches";
import PublicRoutes from "./Components/authRoutes/PublicRoutes";
import PrivateRoutes from "./Components/authRoutes/PrivateRoutes";
const routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PrivateRoutes
          {...props}
          path="/dashboard"
          exact
          component={Dashboard}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches"
          exact
          component={AdminMatches}
        />
        <PrivateRoutes
          {...props}
          path="/admin_matches/edit_match/:id"
          exact
          component={AddEditMatch}
        />
        {/* <Route exact component={Home} path="/"></Route> */}
        {/* <Route exact component={SignIn} path="/signin"></Route> */}
        <PublicRoutes
          {...props}
          restricted={false}
          exact
          path="/"
          component={Home}
        />
        <PublicRoutes
          {...props}
          restricted
          exact
          path="/signin"
          component={SignIn}
        />
        {/* <Route exact component={Dashboard} path="/dashboard"></Route> */}
      </Switch>
    </Layout>
  );
};

export default routes;

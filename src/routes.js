import React from "react";
import Layout from "./HOC/Layout";
import { Switch } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/signin";
import Dashboard from "./Components/admin/Dashboard";
import AddEditMatch from "./Components/admin/matches/addEditMatch";
import AdminPlayers from "./Components/admin/players";

import AdminMatches from "./Components/admin/matches";
import PublicRoutes from "./Components/authRoutes/PublicRoutes";
import PrivateRoutes from "./Components/authRoutes/PrivateRoutes";
import AddEditPlayers from "./Components/admin/players/addEditPlayers";

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
        <PrivateRoutes
          {...props}
          path="/admin_matches/edit_match/"
          exact
          component={AddEditMatch}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players/add_players/:id"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players/add_players"
          exact
          component={AddEditPlayers}
        />
        <PrivateRoutes
          {...props}
          path="/admin_players"
          exact
          component={AdminPlayers}
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

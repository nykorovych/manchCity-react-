import React from "react";
import Layout from "./HOC/Layout";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import SignIn from "./Components/signin";
import Dashboard from './Components/admin/Dashboard'

import PublicRoutes from './Components/authRoutes/PublicRoutes'
import PrivateRoutes from './Components/authRoutes/PrivateRoutes'
const routes = (props) => {

  console.log(props.user)
  return (
    <Layout>
      <Switch>

        <PrivateRoutes {...props} path='/dashboard' exact component={Dashboard}/>
        {/* <Route exact component={Home} path="/"></Route> */}
        {/* <Route exact component={SignIn} path="/signin"></Route> */}
        <PublicRoutes {...props} restricted={false} exact path='/' component={Home} />
        <PublicRoutes {...props} restricted exact path='/signin' component={SignIn} />
        {/* <Route exact component={Dashboard} path="/dashboard"></Route> */}
      </Switch>
    </Layout>
  );
};

export default routes;

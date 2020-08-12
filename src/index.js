import React from "react";
import ReactDOM from "react-dom";
import "./Resources/css/app.css";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { firebase } from "./firebase";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes user ={props.user}></Routes>
    </BrowserRouter>
  );
};
firebase.auth().onAuthStateChanged((u) => {
  ReactDOM.render(<App user={u} />, document.getElementById("root"));
});

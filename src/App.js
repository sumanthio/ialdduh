import React from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
export const App = () => {
  return (
    <React.Fragment>
      <h2>Hi Main</h2>
      <Router>
        <Routes />
      </Router>
    </React.Fragment>
  );
};

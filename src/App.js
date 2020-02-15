import React from "react";
import Routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
export const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

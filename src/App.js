import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Start from "./components/Start";
import Welcome from "./components/Welcome";
import Test from "./components/Test";

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a2841;
    height: 100vh;
  }
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path="/" component={Start} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

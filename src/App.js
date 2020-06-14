import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Start from "./components/Start";
import Welcome from "./components/Welcome";
import Test from "./components/Test";
import { AuthProvider } from "./Auth";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import SignUp from "./SignUp";
import { SuspenseWithPerf } from "reactfire";

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a2841;
    height: 100vh;
    color: white;
  }
`;

function App() {
  return (
    <SuspenseWithPerf>
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/start" component={Start} />
            <Route exact path="/welcome" component={Welcome} />
            <Route exact path="/test" component={Test} />
          </Switch>
        </Router>
      </AuthProvider>
    </SuspenseWithPerf>
  );
}

export default App;

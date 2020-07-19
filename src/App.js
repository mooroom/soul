import React from "react";
// import logo from './logo.svg';
import "./App.scss";
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
import { SuspenseWithPerf, AuthCheck } from "reactfire";
import My from "./My";
import Write from "./Write";
import Events from "./Events";
import Contents from "./Contents";
import Privacy from "./Privacy";

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a2841;
    height: 100vh;
    color: white;
    -ms-overflow-style: none;

  }
  body::-webkit-scrollbar {
    display: none
  }
  #element::-webkit-scrollbar {
    display: none;
}
::-webkit-scrollbar {
  display: none;
}
`;

function App() {
  return (
    <SuspenseWithPerf>
      <Router>
        <GlobalStyle />
        <Switch>
          {/* <Route exact path="/privacy" component={Privacy} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <AuthProvider>
            <AuthCheck fallback={<Login />}>
              <Route exact path="/start" component={Start} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/test" component={Test} />
              <Route exact path="/" component={Home} />
              <Route exact path="/my" component={My} />
              <Route exact path="/write" component={Write} />
              <Route exact path="/events/:eid" component={Events} />
              <Route exact path="/contents/:eid" component={Contents} />
            </AuthCheck>
          </AuthProvider>
        </Switch>
      </Router>
    </SuspenseWithPerf>
  );
}

export default App;

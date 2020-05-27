import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #1a2841;
  }
`;

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Route exact path="/" component={Form} />
      </Router>
    </>
  );
}

export default App;

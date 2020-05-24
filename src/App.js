import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Route exact path="/form" component={Form} />
    </Router>
  );
}

export default App;

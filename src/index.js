import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyDAZRl77_R00AlH6K1vjqQ52Mq5M8ukH1E",
  authDomain: "soul-67206.firebaseapp.com",
  databaseURL: "https://soul-67206.firebaseio.com",
  projectId: "soul-67206",
  storageBucket: "soul-67206.appspot.com",
  messagingSenderId: "494733846247",
  appId: "1:494733846247:web:6ba8a3dcdc0d8bbb87e442",
  measurementId: "G-HSR0HQXV1B",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig} initPerformance>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

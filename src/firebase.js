import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDAZRl77_R00AlH6K1vjqQ52Mq5M8ukH1E",
  authDomain: "soul-67206.firebaseapp.com",
  databaseURL: "https://soul-67206.firebaseio.com",
  projectId: "soul-67206",
  storageBucket: "soul-67206.appspot.com",
  messagingSenderId: "494733846247",
  appId: "1:494733846247:web:6ba8a3dcdc0d8bbb87e442",
  measurementId: "G-HSR0HQXV1B",
};

firebase.initializeApp(config);

const myFirebase = new firebase();

export { firebase };

import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA_FKifFBkSUq7KnDY9h71eWWBZqDIIWY4",
  authDomain: "productlist-d6407.firebaseapp.com",
  databaseURL: "https://productlist-d6407.firebaseio.com",
  projectId: "productlist-d6407",
  storageBucket: "productlist-d6407.appspot.com",
  messagingSenderId: "353729938062",
  appId: "1:353729938062:web:0bdc50e24a62bf4ce9bfdf",
  measurementId: "G-8610YV8N0J",
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

export default firestore;

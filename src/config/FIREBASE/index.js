import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyBFhdDLtsK2ceQQJbMqkDyiwenB7kaoctk",
    authDomain: "noteapp-959be.firebaseapp.com",
    databaseURL: "https://noteapp-959be-default-rtdb.firebaseio.com",
    projectId: "noteapp-959be",
    storageBucket: "noteapp-959be.appspot.com",
    messagingSenderId: "447433557550",
    appId: "1:447433557550:web:a38e01070cdf375524c1bf"
});

const FIREBASE = firebase;

export default FIREBASE;
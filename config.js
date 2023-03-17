import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
//import * as firebase from "firebase";

const firebaseConfig = {
     apiKey: "AIzaSyBzpCGbJ_471QUi_zmXLrrvvfRH2G6Mdzg",
  authDomain: "react-todo-b86af.firebaseapp.com",
  projectId: "react-todo-b86af",
  storageBucket: "react-todo-b86af.appspot.com",
  messagingSenderId: "837054556885",
  appId: "1:837054556885:web:21f8996a756b5a068b105c",
  measurementId: "G-6S3PKW27CP"
};

//Initialize firebase
let app;
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const auth = firebase.auth()

export {firebase, auth};
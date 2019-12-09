import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyBpEU0QZl46IwTkyfCeDKtvzDCPpideL0g",
    authDomain: "fir-todo-react-cb03f.firebaseapp.com",
    databaseURL: "https://fir-todo-react-cb03f.firebaseio.com",
    projectId: "fir-todo-react-cb03f",
    storageBucket: "fir-todo-react-cb03f.appspot.com",
    messagingSenderId: "781656619996",
    appId: "1:781656619996:web:d352ef34eddf86085bed19"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const databaseRef = firebase.database().ref();
  export const todosRef = databaseRef.child("todos")
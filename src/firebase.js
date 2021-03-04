import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBS6AORc0Q1orGkHxb3EnUl3bzRUPV8RGQ',
  authDomain: 'dbmsprojecttwo.firebaseapp.com',
  projectId: 'dbmsprojecttwo',
  storageBucket: 'dbmsprojecttwo.appspot.com',
  messagingSenderId: '524468701563',
  appId: '1:524468701563:web:e2126e76a7d16d701555de',
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();

export default app;

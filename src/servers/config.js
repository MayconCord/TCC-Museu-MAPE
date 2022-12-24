import firebase from 'firebase/app'; 
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD9Rr4wQE6_E6xF08Dr5noyV0-szbiAvbw",
    authDomain: "mape-cad17.firebaseapp.com",
    databaseURL: "https://mape-cad17-default-rtdb.firebaseio.com",
    projectId: "mape-cad17",
    storageBucket: "mape-cad17.appspot.com",
    messagingSenderId: "443401686782",
    appId: "1:443401686782:web:81b619dc10d9bf320cdfaf"
};

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, app, auth, db };
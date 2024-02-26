import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBHgVQfy1vJOWiOOjQUoghcR0cR1yMtMj0",
    authDomain: "firegram-app-8b581.firebaseapp.com",
    projectId: "firegram-app-8b581",
    storageBucket: "firegram-app-8b581.appspot.com",
    messagingSenderId: "212933991055",
    appId: "1:212933991055:web:fa795ad0f6f776ae2faefa"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFireStore, projectStorage, timestamp };

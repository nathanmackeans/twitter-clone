import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC78PsihOdYzVDgqwNAGhtYxSUCAxxVXMQ",
    authDomain: "twetter-88cbc.firebaseapp.com",
    projectId: "twetter-88cbc",
    storageBucket: "twetter-88cbc.appspot.com",
    messagingSenderId: "285683132317",
    appId: "1:285683132317:web:36e83dacdbafec80867174",
    measurementId: "G-Y3L7K4FGD4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
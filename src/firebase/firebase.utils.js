import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBjpH0lP7D2EpC1jQzQaWXGMV9OBBKsitA",
    authDomain: "unimax-db-a7402.firebaseapp.com",
    databaseURL: "https://unimax-db-a7402.firebaseio.com",
    projectId: "unimax-db-a7402",
    storageBucket: "unimax-db-a7402.appspot.com",
    messagingSenderId: "457147893270",
    appId: "1:457147893270:web:ecf39af2bd723456fc1737",
    measurementId: "G-MQEVJ6289W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
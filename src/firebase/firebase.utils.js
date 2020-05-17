import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBN4K87bs_NjkzDRtFfiGaGEQDV59tn1zM",
    authDomain: "unimax-db-b0574.firebaseapp.com",
    databaseURL: "https://unimax-db-b0574.firebaseio.com",
    projectId: "unimax-db-b0574",
    storageBucket: "unimax-db-b0574.appspot.com",
    messagingSenderId: "985839410115",
    appId: "1:985839410115:web:c627fe715462a7013cfb76",
    measurementId: "G-RR8FPHJJTB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
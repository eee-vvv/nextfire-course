import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA61y5itb-6uZkqCSBDEaAXOy9wtUDrFIM",
  authDomain: "nextfire-e334e.firebaseapp.com",
  projectId: "nextfire-e334e",
  storageBucket: "nextfire-e334e.appspot.com",
  messagingSenderId: "709929780792",
  appId: "1:709929780792:web:654c8e387facff391ac8cd",
  measurementId: "G-NJ369HV64X"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

import firebase from 'firebase/app'; //pulls in firebase utility library - base import
import 'firebase/firestore'; //database
import 'firebase/auth'; //authentication

const config = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: 'royal-db-33f36.firebaseapp.com',
  databaseURL: 'https://royal-db-33f36.firebaseio.com',
  projectId: 'royal-db-33f36',
  storageBucket: 'royal-db-33f36.appspot.com',
  messagingSenderId: '325572994858',
  appId: '1:325572994858:web:83d124e0453c50262c6053',
  measurementId: 'G-0QEZSC91XR'
};

firebase.initializeApp(config);

//google auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider(); 
provider.setCustomParameters({prompt: 'select_account'}) //trigger google pop up for auth/signin
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
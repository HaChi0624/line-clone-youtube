import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
  piKey: "AIzaSyAdC7BeGSrf4XYcGJihpXc4uugX4eV3-ko",
  authDomain: "line-clone-49fec.firebaseapp.com",
  projectId: "line-clone-49fec",
  storageBucket: "line-clone-49fec.appspot.com",
  messagingSenderId: "31810868122",
  appId: "1:31810868122:web:a0c30070af5fc88d8ea023"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
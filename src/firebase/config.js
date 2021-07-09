import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBtepiO7n-9T8aibdkhCBIZ27WlxIYTkKc",
  authDomain: "muso-list-9849c.firebaseapp.com",
  projectId: "muso-list-9849c",
  storageBucket: "muso-list-9849c.appspot.com",
  messagingSenderId: "539132516397",
  appId: "1:539132516397:web:93ad1cade427a0067d00a4"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage  = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }
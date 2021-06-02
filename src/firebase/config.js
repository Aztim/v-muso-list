import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyAQCnkYYKxU_NrAKWAySVuF2PnseBBdhLM",
  authDomain: "muso-list-90345.firebaseapp.com",
  projectId: "muso-list-90345",
  storageBucket: "muso-list-90345.appspot.com",
  messagingSenderId: "654512224919",
  appId: "1:654512224919:web:ce2f30dcce3e2f170747d2"
};

//init firebase
firebase.initialize(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
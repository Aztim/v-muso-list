import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyD7pShL4g656_fkdM_kegZton1oUdYIU78",
  authDomain: "muso-list-9cd0b.firebaseapp.com",
  projectId: "muso-list-9cd0b",
  storageBucket: "muso-list-9cd0b.appspot.com",
  messagingSenderId: "61890367506",
  appId: "1:61890367506:web:8110f7263aa70a2cd4c8cb"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
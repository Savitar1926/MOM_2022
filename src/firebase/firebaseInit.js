import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCCOYmtD-sQ_CWie5O4BB2O0LoD6SZfisc",
  authDomain: "mom-2-f01ce.firebaseapp.com",
  projectId: "mom-2-f01ce",
  storageBucket: "mom-2-f01ce.appspot.com",
  messagingSenderId: "747564454446",
  appId: "1:747564454446:web:ac81f8db4241ad2c4005bf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
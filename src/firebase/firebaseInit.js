import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAlwRf5ObB31Ny8-YhrXothJnK7331uwSM",
    authDomain: "summerpoj.firebaseapp.com",
    projectId: "summerpoj",
    storageBucket: "summerpoj.appspot.com",
    messagingSenderId: "936677123827",
    appId: "1:936677123827:web:bd030dc604e5cb6b2b7986"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
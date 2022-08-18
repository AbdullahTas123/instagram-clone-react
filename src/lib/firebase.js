import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// here I want to import the seed file
// import { seedDatabase } from "../seed";

const firebaseConfig = {
  apiKey: "AIzaSyCngK__xFaxGdsfCsZZmjfbx7H6xD3ki8s",
  authDomain: "instagram-clone-react-94bad.firebaseapp.com",
  projectId: "instagram-clone-react-94bad",
  storageBucket: "instagram-clone-react-94bad.appspot.com",
  messagingSenderId: "1092344350570",
  appId: "1:1092344350570:web:5c551a53332a8c33964713"
};

// const firebaseConfig = {};

const firebase = Firebase.initializeApp(firebaseConfig);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the send fiel (only ONCE!)
// seedDatabase(firebase);

//console.log("firebase", firebase);
export { firebase, FieldValue };


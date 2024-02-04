import firebase from 'firebase/app';
// import 'firebase/i
import 'firebase/auth'; // for authentication
import 'firebase/firestore'; // for cloud firestore
import 'firebase/storage'; // for storage
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU-fiL677eKa2VrxSNCXpQj98nMgXx6Rg",
  authDomain: "lofi-website-murex.vercel.app",
  projectId: "lofi-clone",
  storageBucket: "lofi-clone.appspot.com",
  messagingSenderId: "302897543450",
  appId: "1:302897543450:web:8183871d9de5e7d971d4a3",
  measurementId: "G-KE9BJWFE8S"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
export { auth, provider, storage };
export default db;
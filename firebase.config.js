// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLymljbeWfECwSBF8F4g5HZYyoxaQUAJ8",
  authDomain: "lcs-app-5128f.firebaseapp.com",
  databaseURL: "https://lcs-app-5128f-default-rtdb.firebaseio.com",
  projectId: "lcs-app-5128f",
  storageBucket: "lcs-app-5128f.appspot.com",
  messagingSenderId: "157694404033",
  appId: "1:157694404033:web:6b5efb988c935a7bbcbb40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {db};
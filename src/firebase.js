import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCqJQYErUU0aMWl8_yeQ9A_2yw1cXHv2C8",
  authDomain: "devathon-84eb3.firebaseapp.com",
  databaseURL: "https://devathon-84eb3-default-rtdb.firebaseio.com",
  projectId: "devathon-84eb3",
  storageBucket: "devathon-84eb3.appspot.com",
  messagingSenderId: "921504230899",
  appId: "1:921504230899:web:06c4e5e93c9e2a7c1d3686",
  measurementId: "G-6EZH3VYE26"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { app, auth, database };
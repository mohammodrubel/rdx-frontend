// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE1U0XnjDRHcD_ejPJKOd2iLid1yxJfkY",
  authDomain: "rdxuniversity.firebaseapp.com",
  projectId: "rdxuniversity",
  storageBucket: "rdxuniversity.appspot.com",
  messagingSenderId: "878603374979",
  appId: "1:878603374979:web:67cd89cd09ca738ae026b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth
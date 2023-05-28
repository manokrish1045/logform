// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCWD2Q4pcHf5NG9Dq3NYRx9ggytX5XOInQ",
    authDomain: "verify-e5df1.firebaseapp.com",
    projectId: "verify-e5df1",
    storageBucket: "verify-e5df1.appspot.com",
    messagingSenderId: "934402748449",
    appId: "1:934402748449:web:72c2901a1888fc993ab360",
    measurementId: "G-671DS8HE46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
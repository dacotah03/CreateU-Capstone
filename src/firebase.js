import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZ9l2lCu3Ab3Bm8GVAYPicd4hga1qUPi0",
    authDomain: "createu-capstone.firebaseapp.com",
    projectId: "createu-capstone",
    storageBucket: "createu-capstone.appspot.com",
    messagingSenderId: "129793434279",
    appId: "1:129793434279:web:4b169e214f4e7976a17182",
    measurementId: "G-KM6KM60XEN"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()
export const firestore = getFirestore(app);
export const auth = getAuth(app);

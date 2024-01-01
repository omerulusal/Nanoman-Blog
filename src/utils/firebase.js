import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "nextblog-409708.firebaseapp.com",
    projectId: "nextblog-409708",
    storageBucket: "nextblog-409708.appspot.com",
    messagingSenderId: "926883999296",
    appId: "1:926883999296:web:429b95fc920affe607b9a5",
    measurementId: "G-LSWE3P6SMT"
};

export const app = initializeApp(firebaseConfig);
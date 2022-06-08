import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyChq6ArrUw6qnvusNATewMXfpk-yM1ZRq4",
    authDomain: "manufacturer-website-3b54c.firebaseapp.com",
    projectId: "manufacturer-website-3b54c",
    storageBucket: "manufacturer-website-3b54c.appspot.com",
    messagingSenderId: "888186000467",
    appId: "1:888186000467:web:1df387aed1428a3c45e2a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;
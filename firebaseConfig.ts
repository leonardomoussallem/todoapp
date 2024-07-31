import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBpTeuxkpqEzZky_wQ-QHufldhK2Tc7gkk",
    authDomain: "fir-app-6b277.firebaseapp.com",
    projectId: "fir-app-6b277",
    storageBucket: "fir-app-6b277.appspot.com",
    messagingSenderId: "438627503799",
    appId: "1:438627503799:web:511e760117bb61e2e3c732",
    measurementId: "G-1BVEJ8PMQB"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP)


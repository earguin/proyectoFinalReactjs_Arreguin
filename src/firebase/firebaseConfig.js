import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBZfHJwS4haGQv3C20iqgQ-LQOh1CjOQ6k",
    authDomain: "tienda-47220.firebaseapp.com",
    projectId: "tienda-47220",
    storageBucket: "tienda-47220.appspot.com",
    messagingSenderId: "223954734314",
    appId: "1:223954734314:web:3c5fdea800d1f55eb35b93"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

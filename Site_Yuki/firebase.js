import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCT7HMiMzYTqIduVGppTxL8WYKcKiOtQ60",
    authDomain: "yuki-restaurant.firebaseapp.com",
    projectId: "yuki-restaurant",
    storageBucket: "yuki-restaurant.firebasestorage.app",
    messagingSenderId: "20154977392",
    appId: "1:20154977392:web:209abf69d05646086b38b5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
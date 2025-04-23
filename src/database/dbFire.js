import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB4D1cp52Qsbgdnt2FLjUnJThfU-zyyzrk",
    authDomain: "project-login-2025.firebaseapp.com",
    projectId: "project-login-2025",
    storageBucket: "project-login-2025.firebasestorage.app",
    messagingSenderId: "437418662374",
    appId: "1:437418662374:web:40e5671a3a994db6281e27",
    measurementId: "G-51JYM5P84R"
  };

const firebaseApp = initializeApp(firebaseConfig)
const dataBase = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { dataBase, auth }
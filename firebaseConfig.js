import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4UcrxUg10spfTjucduu7pVTCeVnxqrTI",
  authDomain: "bilibioteka.firebaseapp.com",
  projectId: "bilibioteka",
  storageBucket: "bilibioteka.appspot.com",
  messagingSenderId: "644785976421",
  appId: "1:644785976421:web:9203cab104d2252e91c28c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };

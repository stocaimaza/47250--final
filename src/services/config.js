import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tienda--marolio.firebaseapp.com",
  projectId: "tienda--marolio",
  storageBucket: "tienda--marolio.appspot.com",
  messagingSenderId: "597295008451",
  appId: "1:597295008451:web:74a50453c13d928ac53076"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// "AIzaSyBIB5hjd7D9dhswcJVpVyRocETJnOonL60"
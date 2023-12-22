import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDpq8i3vDjQF8FKL2RaWFb1VB8FToucK6Q",
  authDomain: "arte-madera.firebaseapp.com",
  projectId: "arte-madera",
  storageBucket: "arte-madera.appspot.com",
  messagingSenderId: "483660032875",
  appId: "1:483660032875:web:95a71586d3af132f8b7a2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportamos nuestra base de datos a toda la app
export const db = getFirestore(app);
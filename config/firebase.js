import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAP1Hv4qvwfmhZooDmdi8c5kBO_BpL0V8o",
  authDomain: "tinyapp-f14ce.firebaseapp.com",
  projectId: "tinyapp-f14ce",
  storageBucket: "tinyapp-f14ce.appspot.com",
  messagingSenderId: "184445949144",
  appId: "1:184445949144:web:c935569fc30ae36c29b3ad",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

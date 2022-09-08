// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArZo_Eobymx9cIsTrVDKKMuRiSWE-GD7A",
  authDomain: "hotel-booking-a092f.firebaseapp.com",
  projectId: "hotel-booking-a092f",
  storageBucket: "hotel-booking-a092f.appspot.com",
  messagingSenderId: "216536588351",
  appId: "1:216536588351:web:10b893d9f68df74da5d88a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8tGJQGpCo1UqYD_5GGXv__BBknvc_t9Y",
  authDomain: "chat-me-app-f4359.firebaseapp.com",
  projectId: "chat-me-app-f4359",
  storageBucket: "chat-me-app-f4359.appspot.com",
  messagingSenderId: "29565893904",
  appId: "1:29565893904:web:0a9a514b3aa13018ddb995"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
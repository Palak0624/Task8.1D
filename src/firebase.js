import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBbO7JmNzsx8qzS7sW3l5HhhYhiQozXug8",
  authDomain: "uploadimage-9952d.firebaseapp.com",
  projectId: "uploadimage-9952d",
  storageBucket: "uploadimage-9952d.appspot.com",
  messagingSenderId: "409717094270",
  appId: "1:409717094270:web:1362e4798faaf5d7bfe52f"
};

const app = initializeApp(firebaseConfig);
export const imageDb= getStorage(app)
export const db = getFirestore(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnjfrZ37YE5LWkE8E3yZHTF96LSLVH3wo",
  authDomain: "js-take-home.firebaseapp.com",
  projectId: "js-take-home",
  storageBucket: "js-take-home.appspot.com",
  messagingSenderId: "495525663893",
  appId: "1:495525663893:web:09f0f547ca414d69a7379c",
  measurementId: "G-NRWNTWSZR7",
};

const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
export { database };
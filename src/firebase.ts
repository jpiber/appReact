import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_NjzvSW3-G_IOabOcA7-mhvSaNzImjz8",
  authDomain: "parqueitaimbesm-abac3.firebaseapp.com",
  projectId: "parqueitaimbesm-abac3",
  storageBucket: "parqueitaimbesm-abac3.appspot.com",
  messagingSenderId: "168854463162",
  appId: "1:168854463162:web:91050e2016467e63e9d883",
  measurementId: "G-S616EBL3VW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db }; 
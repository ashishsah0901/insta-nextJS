import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBM0u7Rtkusa_RKkhH1XCzQ0qAkdKdJE0I",
  authDomain: "netflix-clone-4e146.firebaseapp.com",
  projectId: "netflix-clone-4e146",
  storageBucket: "netflix-clone-4e146.appspot.com",
  messagingSenderId: "791969300645",
  appId: "1:791969300645:web:ebf2659685e074c22c8d4c",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

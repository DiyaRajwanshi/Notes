import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAOVhHD7JC_owkfVWzW3u3ZxL2SFnUY6D8",
  authDomain: "react-notes-c72de.firebaseapp.com",
  projectId: "react-notes-c72de",
  storageBucket: "react-notes-c72de.appspot.com",
  messagingSenderId: "1050973262397",
  appId: "1:1050973262397:web:00cf810d64fd80baaed054"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
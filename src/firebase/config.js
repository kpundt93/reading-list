import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAX2IkePJacMoXyX2SsNPwRWaUEhAwPzos",
  authDomain: "readinglistapp-5b2a5.firebaseapp.com",
  projectId: "readinglistapp-5b2a5",
  storageBucket: "readinglistapp-5b2a5.appspot.com",
  messagingSenderId: "554124290373",
  appId: "1:554124290373:web:cb781e09592cf2d828362c"
};

// init firebase
initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth }
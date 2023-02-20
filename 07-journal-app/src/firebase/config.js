// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAzSNqkVzsU71FbJrDxhi6Z8-Kz-BnDI_U',
  authDomain: 'react-cursos-5d1db.firebaseapp.com',
  projectId: 'react-cursos-5d1db',
  storageBucket: 'react-cursos-5d1db.appspot.com',
  messagingSenderId: '444973420173',
  appId: '1:444973420173:web:75bab33da78eb37e555cc4',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseBD = getFirestore(FirebaseApp);

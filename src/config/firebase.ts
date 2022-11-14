// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCOKTg_39UB_yNoMg_jSDTjKUmTJCZVdcI',
	authDomain: 'fir-demo-52c11.firebaseapp.com',
	projectId: 'fir-demo-52c11',
	storageBucket: 'fir-demo-52c11.appspot.com',
	messagingSenderId: '942667744789',
	appId: '1:942667744789:web:a904a40b3801e6030e701c',
};
console.log(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);

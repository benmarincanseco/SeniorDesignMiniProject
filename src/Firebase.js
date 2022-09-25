// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,  signInWithPopup} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCDXf6XjMoKKLK7j64R_bEfnjdO0wuixjI",
  authDomain: "miniproject27-2da95.firebaseapp.com",
  projectId: "miniproject27-2da95",
  storageBucket: "miniproject27-2da95.appspot.com",
  messagingSenderId: "54975150619",
  appId: "1:54975150619:web:32f1ad3abe555495a716be",
  measurementId: "G-X51F9L546E"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
    });
}
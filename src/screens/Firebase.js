import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import LoginPage from '../screens/LoginPage';

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

const signIn = () => {
    auth()
    .createUserWithEmailAndPassword(LoginPage.email, LoginPage.password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });

}

export default signIn
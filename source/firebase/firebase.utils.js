import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const config = {
    apiKey: "AIzaSyCv5EiRyE15HVfcfH9EV0_Y_2mfu34jGUY",
    authDomain: "crwn-grooming.firebaseapp.com",
    projectId: "crwn-grooming",
    storageBucket: "crwn-grooming.appspot.com",
    messagingSenderId: "361126739192",
    appId: "1:361126739192:web:8c33df93f0521360f90f0d",
    measurementId: "G-MZ0YNT277X"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const fireStore = firebase.firestore()
   const provider = new firebase.auth.GoogleAuthProvider()
   provider.setCustomParameters({prompt : 'select_account'}) 
   export const signInWithGoogle = () => auth.signInWithPopup(provider);

   export default firebase;
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDceYxVoLOJLThGgPLg1PbqGL1G1oshsew",
    authDomain: "crwn-db-25140.firebaseapp.com",
    databaseURL: "https://crwn-db-25140.firebaseio.com",
    projectId: "crwn-db-25140",
    storageBucket: "",
    messagingSenderId: "423509292365",
    appId: "1:423509292365:web:20ce8edf3a29fc6e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;
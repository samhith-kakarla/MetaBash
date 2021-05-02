import firebase from 'firebase/app'; 
import 'firebase/firestore'; 

const firebaseConfig = {
    apiKey: "AIzaSyABanuvUXd6UPGbXovrVTMDjQM7VB98mgk",
    authDomain: "metabashparty.firebaseapp.com",
    projectId: "metabashparty",
    storageBucket: "metabashparty.appspot.com",
    messagingSenderId: "488341571454",
    appId: "1:488341571454:web:48037f14107981144e552f"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase; 
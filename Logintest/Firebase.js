import firebase from 'firebase';
  const firebaseConfig = {
    apiKey: "AIzaSyDDkeFXiNeyENyCOBXCMwAVqtdka-2-EYI",
    authDomain: "ladkibachao-d4871.firebaseapp.com",
    databaseURL: "https://ladkibachao-d4871.firebaseio.com",
    projectId: "ladkibachao-d4871",
    storageBucket: "ladkibachao-d4871.appspot.com",
    messagingSenderId: "758986718367",
    appId: "1:758986718367:web:ab64c323ee5b4e90ef76aa"
  };

     
      const Firebase = firebase.initializeApp(firebaseConfig)
             
    
      export default Firebase ;
      // // export const db = Firebase.database();
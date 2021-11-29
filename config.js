import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDtzb69prXwp1afesloTD2IvRtlchwa1uM",
  authDomain: "voting-2-27e00.firebaseapp.com",
  databaseURL: "https://voting-2-27e00-default-rtdb.firebaseio.com",
  projectId: "voting-2-27e00",
  storageBucket: "voting-2-27e00.appspot.com",
  messagingSenderId: "746837060001",
  appId: "1:746837060001:web:1cd8498f160b7b7902c3e0",
  measurementId: "G-JPWWMJ0T16"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
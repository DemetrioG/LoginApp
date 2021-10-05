import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA-SQ64qp2sQ0o2BDIFlU9CoiaLIgnVOWw",
  authDomain: "fir-d00a7.firebaseapp.com",
  databaseURL: "https://fir-d00a7-default-rtdb.firebaseio.com",
  projectId: "fir-d00a7",
  storageBucket: "fir-d00a7.appspot.com",
  messagingSenderId: "901210727291",
  appId: "1:901210727291:web:6636aed42a8079a40f13de",
  measurementId: "G-2SB9SD6JLJ"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);    
}


export default firebase
import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBc0--jxZ2Nt9UrilRPH9qpceWEXRYSLvs",
  authDomain: "manchestercity-b23cb.firebaseapp.com",
  databaseURL: "https://manchestercity-b23cb.firebaseio.com",
  projectId: "manchestercity-b23cb",
  storageBucket: "manchestercity-b23cb.appspot.com",
  messagingSenderId: "192482715599",
  appId: "1:192482715599:web:4ca96c717d437dbdd294ba",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMatches,
    firebasePromotions,
    firebaseTeams,
    firebasePlayers,
    firebaseDB
}
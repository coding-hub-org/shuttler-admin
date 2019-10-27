import firebase from "firebase";
import firebaseConfig from "../config";

interface Config {
	apiKey: string;
	authDomain: string;
	databaseURL: string;
	projectID: string;
	storageBucket: string;
	messagingSenderId: string;
	appID: string;
}

firebase.initializeApp(firebaseConfig);

export default firebase;

import firebase from "firebase";

interface Config{
    apiKey : string;
    authDomain : string;
    databaseURL : string;
    projectID: string;
    storageBucket : string;
    messagingSenderId: string;
    appID: string;
}
import firebaseConfig from "../config";

firebase.initializeApp(firebaseConfig);

export default firebase;
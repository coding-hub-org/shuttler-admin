import firebase from "./firebase";
import { Dispatch, SetStateAction } from "react";

const authStateChange = (fnc: Dispatch<SetStateAction<boolean>>) => {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			fnc(true);
			console.log("Signed in");
		} else {
			fnc(false);
			console.log("No auth");
		}
	});
};

export default authStateChange;

import firebase from "./firebase";
import { Dispatch, SetStateAction } from "react";

const checkAdmin = (fnc: Dispatch<SetStateAction<boolean>>): void => {
	console.log("checking admin status");
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			user.getIdTokenResult().then(idTokenResult => {
				if (idTokenResult.claims.admin) {
					fnc(idTokenResult.claims.admin);
				}
			});
		}
	});
	fnc(false);
};

export default checkAdmin;

import firebase from "./firebase";
export const authStateChange = (fnc: Function) => {
	firebase
		.auth()
		.onAuthStateChanged(function(user) {
			if (user) {
				fnc(true);
				console.log("Signed in");
			} else {
				fnc(false);
				console.log("No auth");
			}
		});
}
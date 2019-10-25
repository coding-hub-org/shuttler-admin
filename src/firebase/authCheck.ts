import firebase from "./firebase";

const authStateChange = (fnc: Function) => {
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

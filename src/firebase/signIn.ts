import firebase from "./firebase";

const signInWithEmailAndPassword = (email: string, password: string) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(error => {
			console.error("Error signing in:", error.code, " - ", error.message);
		});
};

export default signInWithEmailAndPassword;

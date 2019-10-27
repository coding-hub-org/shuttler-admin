import firebase from "./firebase";

const signInWithEmailAndPassword = (email: string, password: string) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.catch(error => {
			console.error("Error signing in:", error.code, " - ", error.message);
    });
    console.log("ran")
};

export default signInWithEmailAndPassword;

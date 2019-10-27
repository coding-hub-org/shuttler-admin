import firebase from "./firebase";

const signOut = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			console.log("Signed Out");
		})
		.catch(error => {
			console.error(error);
		});
};

export default signOut;

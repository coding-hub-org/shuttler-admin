import firebase from "./firebase";

const checkAdmin = (): boolean => {
	firebase.auth().onAuthStateChanged(user => {
		if (user) {
			user.getIdTokenResult().then(idTokenResult => {
				if (idTokenResult.claims.admin) {
					return idTokenResult.claims.admin;
				}
			});
		}
	});
	return false;
};

export default checkAdmin;

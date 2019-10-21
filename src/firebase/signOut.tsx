import firebase from './firebase';
export const signOut = () => {
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

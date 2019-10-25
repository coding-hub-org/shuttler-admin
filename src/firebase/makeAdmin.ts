import firebase from "./firebase";

const makeAdmin = (email: string) => {
	let addAdmin = firebase.functions().httpsCallable("makeAdmin");
	addAdmin({ email })
		.then(msg => console.log(msg))
		.catch(err => console.error(err));
};

export default makeAdmin;

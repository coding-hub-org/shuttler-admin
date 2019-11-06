import firebase from "./firebase";

const sendNotification = (title: string, message: string) => {
	firebase
		.firestore()
		.collection("notifications")
		.add({
      date: Date(),
      dateFlutter: Date.now(), 
			title,
			description: message
		})
		.then(function(docRef) {
			console.log("Document written with ID: ", docRef.id);
			alert("Message was sent to all users");
		})

		.catch(function(error) {
			console.error("Error adding document: ", error);
		});
};

export default sendNotification;

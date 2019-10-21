import firebase from './firebase';
export const checkAdmin = ():boolean | undefined => {
	firebase.auth().onAuthStateChanged((user) => {
    if(user){
      user.getIdTokenResult().then(idTokenResult => {
        console.log(idTokenResult.claims.admin);
        return idTokenResult.claims.admin;
      })
    }})
  return false;
};

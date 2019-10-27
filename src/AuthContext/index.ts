import { createContext } from "react";

const AuthContext = createContext({
	loggedIn: false,
  admin: false
});

export default AuthContext;

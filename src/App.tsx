import React, {
	FunctionComponent,
	useState,
	useContext,
	useEffect
} from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SendNotificationsPage from "./pages/SendNotificationsPage";
import { PrivateRoute, StrictPublicRoute } from "./components/Routes";
import Navbar from "./components/Navbar";
import AuthContext from "./AuthContext";

import "./App.scss";
import { authStateChange, checkAdmin } from "./firebase";

const App: FunctionComponent = () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [admin, setAdmin] = useState(false);

	useEffect(() => {
		checkAdmin(setAdmin);
	}, [loggedIn]);

	authStateChange(setLoggedIn);
	return (
		<div className="App">
			<AuthContext.Provider value={{ loggedIn, admin }}>
				<Router>
					{loggedIn && admin && <Navbar />}
					<Switch>
						<StrictPublicRoute exact path="/" component={LoginPage} />
						<PrivateRoute
							exact
							path="/send-notifications"
							component={SendNotificationsPage}
						/>
					</Switch>
				</Router>
			</AuthContext.Provider>
		</div>
	);
};

export default App;

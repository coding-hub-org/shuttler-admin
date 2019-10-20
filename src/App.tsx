import React, { FunctionComponent, useState, useEffect } from "react";

import LoginPage from "./pages/LoginPage";
import SendNotificationsPage from "./pages/SendNotificationsPage";

import "./App.scss";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect
} from "react-router-dom";

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Switch>
					<StrictPublicRoute exact path="/" component={LoginPage} />
					<PrivateRoute
						exact
						path="/send-notifications"
						component={SendNotificationsPage}
					/>
				</Switch>
			</Router>
		</div>
	);
};

const PrivateRoute: FunctionComponent<{
	exact?: boolean;
	path: string;
	component: FunctionComponent<{}>;
}> = ({ exact = false, path, component }) => {
	const [admin, setAdmin] = useState(false);

	useEffect(() => {
		// setAdmin(checkAdmin())
	}, []);

	return admin ? (
		<Route exact={exact} path={path} component={component} />
	) : (
		<>
			<Redirect to="/" />
		</>
	);
};

const StrictPublicRoute: FunctionComponent<{
	exact?: boolean;
	path: string;
	component: FunctionComponent<{}>;
}> = ({ exact = false, path, component }) => {
	const [admin, setAdmin] = useState(false);

	useEffect(() => {
		// setAdmin(checkAdmin())
	}, []);

	return admin ? (
		<>
			<Redirect to="/send-notifications" />
		</>
	) : (
		<Route exact={exact} path={path} component={component} />
	);
};

export default App;

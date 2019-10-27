import React, { FunctionComponent, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import AuthContext from "../../AuthContext";

export const PrivateRoute: FunctionComponent<{
	exact?: boolean;
	path: string;
	component: FunctionComponent<{}>;
}> = ({ exact = false, path, component }) => {
	const { loggedIn, admin } = useContext(AuthContext);

	return loggedIn && admin ? (
		<Route exact={exact} path={path} component={component} />
	) : (
		<Redirect to="/" />
	);
};

export const StrictPublicRoute: FunctionComponent<{
	exact?: boolean;
	path: string;
	component: FunctionComponent<{}>;
}> = ({ exact = false, path, component }) => {
	const { loggedIn, admin } = useContext(AuthContext);

	return loggedIn && admin ? (
		<Redirect to="/send-notifications" />
	) : (
		<Route exact={exact} path={path} component={component} />
	);
};

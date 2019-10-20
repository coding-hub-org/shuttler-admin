import React, { FunctionComponent, useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute: FunctionComponent<{
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
		<Redirect to="/" />
	);
};

export const StrictPublicRoute: FunctionComponent<{
	exact?: boolean;
	path: string;
	component: FunctionComponent<{}>;
}> = ({ exact = false, path, component }) => {
	const [admin, setAdmin] = useState(false);

	useEffect(() => {
		// setAdmin(checkAdmin())
	}, []);

	return admin ? (
		<Redirect to="/send-notifications" />
	) : (
		<Route exact={exact} path={path} component={component} />
	);
};

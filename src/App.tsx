import React, { FunctionComponent, useState, useEffect } from "react";

import LoginPage from "./pages/LoginPage";
import SendNotificationsPage from "./pages/SendNotificationsPage";
import { PrivateRoute, StrictPublicRoute } from "./components/Routes";

import "./App.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Navbar />
        <SendNotificationsPage />
				{/* <Switch>
					<StrictPublicRoute exact path="/" component={LoginPage} />
					<PrivateRoute
						exact
						path="/send-notifications"
						component={SendNotificationsPage}
					/>
				</Switch> */}
			</Router>
		</div>
	);
};

export default App;

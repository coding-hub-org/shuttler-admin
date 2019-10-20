import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Logo from "../../assets/icons/logo.png";
import styles from "./index.module.scss";

const Navbar: FunctionComponent = () => {
	return (
		<div className={styles["navbar-container"]}>
			<div className={styles["logo-container"]}>
				<img
					src={Logo}
					alt=""
					className={classnames(styles["shuttler-logo"])}
				/>
			</div>
			<div className={styles["flex-grow"]} />
			<div className={styles["link-container"]}>
				<Link to="/">Add admins</Link>
				<Link to="/">Send Notifications</Link>
				{/* <Link to="/">Check Shuttle History</Link> */}
			</div>
		</div>
	);
};

export default Navbar;

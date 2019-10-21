import React, { FunctionComponent } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

import Logo from "../../assets/icons/logo.png";
import styles from "./index.module.scss";
import Button from "../Button";

const Navbar: FunctionComponent = () => {
	return (
		<div className={styles["navbar-container"]}>
			<div className={styles["flex-grow--1"]} />

			<div className={styles["logo-container"]}>
				<img
					src={Logo}
					alt=""
					className={classnames(styles["shuttler-logo"])}
				/>
			</div>
			<div className={styles["flex-grow--5"]} />
			<div className={styles["link-container"]}>
					<Link className={classnames(styles["link"])} to="/">
						<div>Add admins</div>
					</Link>
					<Link className={classnames(styles["link"])} to="/">
						<div>Send Notifications</div>
					</Link>
					{/* <Link to="/">Check Shuttle History</Link> */}


				<div className={styles["link-parent"]}>
					<Button size="sm">Sign Out</Button>
				</div>
			</div>

			<div className={styles["flex-grow--1"]} />
		</div>
	);
};

export default Navbar;

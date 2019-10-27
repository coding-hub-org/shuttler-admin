import React, { FunctionComponent, useState } from "react";

import classnames from "classnames";

import styles from "./index.module.scss";

import Logo from "../../assets/icons/logo.png";
import LoginLanding from "../../assets/landing/login_landing.png";
import InputBlock from "../../components/InputBlock";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { signInWithEmailAndPassword } from "../../firebase";

const LoginPage: FunctionComponent = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<div className={styles["login-page-container"]}>
			<div className={styles["left-container"]}>
				<img
					src={Logo}
					alt=""
					className={classnames(styles["shuttler-logo"])}
				/>
				<form className={styles["login-form"]}>
					<Title>Admin Login</Title>
					<InputBlock
						label="Email"
						type="email"
						id="email"
						value={email}
						validated={email.endsWith("@plattsburgh.edu")}
						validationMessage={"Must be a valid plattsburgh email."}
						onChange={(val: string) => {
							setEmail(val);
						}}
						placeholder="netid@plattsburgh.edu"
					/>
					<InputBlock
						label="Password"
						type="password"
						id="password"
						value={password}
						validated={password.length > 7}
						validationMessage={"Must be a valid password."}
						onChange={(val: string) => {
							setPassword(val);
						}}
						placeholder="**********"
					/>
					<Button
						onClick={() => {
							if (!email.endsWith("@plattsburgh.edu") || password.length < 8) {
								alert("Please enter your email and/or password");
							} else signInWithEmailAndPassword(email, password);
						}}
					>
						Login
					</Button>
				</form>
			</div>
			<div
				className={classnames(styles["right-container"], "ui-bg--light-grey")}
			>
				<img
					src={LoginLanding}
					alt="login-landing"
					className={styles["login-landing"]}
				/>
			</div>
		</div>
	);
};

export default LoginPage;

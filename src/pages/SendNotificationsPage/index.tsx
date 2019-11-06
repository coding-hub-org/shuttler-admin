import React, { FunctionComponent, useState } from "react";
import classnames from "classnames";
import styles from "./index.module.scss";

import Title from "../../components/Title";
import Button from "../../components/Button";
import InputBlock from "../../components/InputBlock";
import MessageBlock from "../../components/MessageBlock";

import SendNotificationsLanding from "../../assets/landing/send_notification.png";
import { sendNotification } from "../../firebase";

const SendNotificationsPage: FunctionComponent = () => {
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = () => {
		if (title === "" || message === "") {
			alert("Cant be empty");
		} else {
			sendNotification(title, message);

			setTitle("");
			setMessage("");
		}
	};

	return (
		<div
			className={classnames(
				styles["notification-page-container"],
				"ui-bg--light-grey"
			)}
		>
			<div className={classnames(styles["left-container"])}>
				<div className={styles["flex-grow"]} />
				<div className={styles["only-desktop"]}>
					<Title type="secondary">Send Notifications?</Title>
				</div>
				<div className={styles["flex-grow"]} />
				<div className={styles["horizontal-center"]}>
					<img
						src={SendNotificationsLanding}
						alt=""
						className={styles["notification-landing"]}
					/>
				</div>
				<div className={styles["flex-grow"]} />
				<div className={styles["flex-grow"]} />
			</div>
			<div className={classnames(styles["right-container"])}>
				<div className="">
					<form className={styles["notification-form"]}>
						<div className={styles["only-tablet"]}>
							<Title type="secondary">Send Notifications?</Title>
						</div>
						<div className={styles["notification-description"]}>
							Please enter all details and click on send
						</div>
						<InputBlock
							label="Title"
							type="text"
							id="title"
							value={title}
							validated={title.length !== 0}
							validationMessage={"Please enter a title"}
							onChange={(val: string) => {
								setTitle(val);
							}}
							placeholder="Enter title here..."
							color="white"
						/>
						<MessageBlock
							label="Message"
							id="email"
							value={title}
							validated={message.length !== 0}
							validationMessage={"Please enter a message"}
							onChange={(val: string) => {
								setMessage(val);
							}}
							placeholder="Enter message here..."
							color="white"
						/>

						<Button onClick={() => handleSubmit()} size="sm">
							Send
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SendNotificationsPage;

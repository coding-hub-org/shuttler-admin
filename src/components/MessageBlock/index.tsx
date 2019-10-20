import React, { FunctionComponent, useState, useEffect } from "react";
import styles from "./index.module.scss";
import classnames from "classnames";

import TickMark from "../../assets/icons/tick.svg";
import CrossMark from "../../assets/icons/cross.svg";

export type MessageBlockProps = {
	disabled?: boolean;
	id: string;
	label?: string;
	onChange: Function;
	placeholder?: string;
	required?: boolean;
	validated?: boolean;
	validationMessage?: string;
	value: string;
	color?: string;
};

const MessageBlock: FunctionComponent<MessageBlockProps> = props => {
	const {
		id,
		label = "",
		onChange,
		placeholder,
		required = false,
		validated = true,
		validationMessage = "",
		value,
		color = "light-grey"
	} = props;

	const [val, setVal] = useState<string>(value);

	const [hasChanged, setHasChanged] = useState<boolean>(false);
	const [wasBlurred, setWasBlurred] = useState<boolean>(false);
	const [showValidation, setShowValidation] = useState<boolean>(false);

	useEffect(() => {
		setShowValidation((hasChanged || wasBlurred) && !validated);
	}, [hasChanged, wasBlurred, validated]);

	useEffect(() => {
		onChange(val);
	}, [val, onChange]);

	return (
		<div className={styles["textarea-block-container"]}>
			<div className={styles["textarea-label"]}>
				<label htmlFor={id}>{label}</label>
				{validated && (
					<img
						src={TickMark}
						alt="tickmark"
						className={styles["validation-icon"]}
					/>
				)}
				{showValidation && !validated && (
					<img
						src={CrossMark}
						alt="crossmark"
						className={styles["validation-icon"]}
					/>
				)}
			</div>
			<div className={styles["validation-message"]}>
				{showValidation ? validationMessage : ""}
				<span className={styles["invisible"]}>.</span>
			</div>
			<div className={classnames(styles["textarea-container"])}>
				<textarea
					className={classnames([
						styles["textarea-element"],
						`ui-bg--${color}`,
						"ui-border ui-border-color--white ui-border--solid",
						"ui-width--100",
						{
							"ui-border ui-border-color--red ui-border--solid":
								showValidation && !validated,
							"ui-border ui-border-color--green ui-border--solid": validated
						}
					])}
					id={id}
					onBlur={() => setWasBlurred(true)}
					onChange={e => {
						e.preventDefault();
						setHasChanged(true);
						setVal(e.currentTarget.value);
					}}
					placeholder={placeholder}
					required={required}
					value={val}
				/>
			</div>
		</div>
	);
};

export default MessageBlock;

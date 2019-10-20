import React, { FunctionComponent, useState, useEffect } from "react";
import classnames from "classnames";

import TickMark from "../../assets/icons/tick.svg";
import CrossMark from "../../assets/icons/cross.svg";

import styles from "./index.module.scss";

export type InputBlockProps = {
	disabled?: boolean;
	id: string;
	label?: string;
	onChange: Function;
	placeholder?: string;
	required?: boolean;
	type?: "text" | "password" | "email" | "number";
	validated?: boolean;
	validationMessage?: string;
	value: string;
	color?: string;
};

const InputBlock: FunctionComponent<InputBlockProps> = props => {
	const {
		disabled = false,
		id,
		label = "",
		onChange,
		placeholder,
		required = false,
		type = "text",
		validated = true,
		validationMessage = "",
		value,
		color = "light-grey"
	} = props;

	const [val, setVal] = useState<string>(value);

	const [hasChanged, setHasChanged] = useState<boolean>(false);
	const [wasBlurred, setWasBlurred] = useState<boolean>(false);
	const [showValidation, setShowValidation] = useState<boolean>(false);

	const originalType = type;

	const [showPassword, setShowPassword] = useState<"password" | "text">(
		"password"
	);

	const togglePassword = (): void => {
		setShowPassword(showPassword === "password" ? "text" : "password");
	};

	useEffect(() => {
		setShowValidation((hasChanged || wasBlurred) && !validated);
	}, [hasChanged, wasBlurred, validated]);

	useEffect(() => {
		onChange(val);
	}, [val, onChange]);

	return (
		<div className={styles["input-block-container"]}>
			<div className={styles["input-label"]}>
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
			<div
				className={classnames([
					styles["input-container"],
					`ui-bg--${color}`,
					{
						"ui-border ui-border-color--white ui-border--solid":
							originalType === "password",
						"ui-border ui-border-color--red ui-border--solid":
							showValidation && !validated && originalType === "password",
						"ui-border ui-border-color--green ui-border--solid":
							validated && originalType === "password"
					}
				])}
			>
				<input
					className={classnames([
						styles["input-element"],
						`ui-bg--${color}`,
						{
							"ui-border ui-border-color--white ui-border--solid":
								originalType !== "password",
							"ui-border--none": originalType === "password",
							"ui-width--100": originalType !== "password",
							"ui-width--90": originalType === "password",
							"ui-border ui-border-color--red ui-border--solid":
								showValidation && !validated && originalType !== "password",
							"ui-border ui-border-color--green ui-border--solid": validated
						}
					])}
					disabled={disabled}
					id={id}
					onBlur={() => setWasBlurred(true)}
					onChange={e => {
						e.preventDefault();
						setHasChanged(true);
						setVal(e.currentTarget.value);
					}}
					placeholder={placeholder}
					required={required}
					type={originalType === "password" ? showPassword : type}
					value={val}
				/>
				{originalType === "password" && (
					<div className={classnames(styles["eye-container"])}>
						<ShowPasswordIcon
							className={classnames([
								{
									"black-eye": showPassword === "password",
									"grey-eye": showPassword === "text"
								},
								styles["eye"]
							])}
							onClick={() => togglePassword()}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export const ShowPasswordIcon: FunctionComponent<
	showPasswordIconProps
> = props => {
	const { className = "", onClick } = props;

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="259.518"
			height="182.997"
			viewBox="0 0 259.518 182.997"
			className={className}
			onClick={() => onClick && onClick()}
		>
			<g id="eye" transform="translate(1817.95 2320.025)">
				<g id="Group_6" data-name="Group 6" transform="translate(-1818 -2323)">
					<path
						id="Path_63"
						data-name="Path 63"
						d="M258.591,87.961C186.955-25.354,73.64-25.354,2,87.961a11.831,11.831,0,0,0,0,13.025c71.636,113.315,184.951,113.315,256.587,0A22.2,22.2,0,0,0,258.591,87.961ZM129.646,159.6c-36.469,0-65.124-28.654-65.124-65.124S93.177,29.35,129.646,29.35,194.77,58,194.77,94.474,166.115,159.6,129.646,159.6Z"
						transform="translate(0 0)"
					/>
					<path
						id="Path_64"
						data-name="Path 64"
						d="M72.124,33.049c-7.815,0-13.025-5.21-13.025-13.025a11.824,11.824,0,0,1,3.907-9.117A36.054,36.054,0,0,0,46.074,7C23.932,7,7,23.932,7,46.074S23.932,85.148,46.074,85.148,85.148,68.216,85.148,46.074a36.054,36.054,0,0,0-3.907-16.932A11.824,11.824,0,0,1,72.124,33.049Z"
						transform="translate(83.572 48.4)"
					/>
				</g>
			</g>
		</svg>
	);
};

export type showPasswordIconProps = {
	className?: string;
	onClick?: Function;
};

export default InputBlock;

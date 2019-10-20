import React, { FunctionComponent } from "react";

import classnames from "classnames";

import styles from "./index.module.scss";

type ButtonProps = {
	size?: "xl" | "lg" | "md" | "sm" | "xs";
	color?: string;
	onClick?: Function;
};

const Button: FunctionComponent<ButtonProps> = props => {
	const { size = "md", color = "light-red", children, onClick } = props;

	return (
		<button
			onClick={e => {
				e.preventDefault();
				onClick && onClick();
			}}
			className={classnames(
				styles["button"],
				styles[`button--${size}`],
				`ui-bg--${color}`
			)}
		>
			{children}
		</button>
	);
};

export default Button;

import React, { FunctionComponent } from "react";
import classnames from "classnames";

import styles from "./index.module.scss";

type TitleProps = {
	type?: "primary" | "secondary" | "tertiary";
	decoration?: boolean;
	color?: string;
};

const Title: FunctionComponent<TitleProps> = props => {
	const {
		type = "primary",
		decoration = true,
		color = "red",
		children
	} = props;

	return (
		<div className={styles["title-container"]}>
			{decoration && (
				<span
					className={classnames(
						`ui-bg--${color}`,
						styles["title-decoration"],
						styles[`title-decoration--${type}`]
					)}
				/>
      )}
			<h1
				className={classnames(
					`ui--${color}`,
					styles["title"],
					styles[`title--${type}`]
				)}
			>
				{children}
			</h1>
		</div>
	);
};

export default Title;

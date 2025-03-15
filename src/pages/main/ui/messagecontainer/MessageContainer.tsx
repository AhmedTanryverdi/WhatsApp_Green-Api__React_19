import React from "react";
import style from "./messagecontainer.module.scss";

export const MessageContainer: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.messageContainer}>
			<div className={style.container}></div>
		</div>
	);
};

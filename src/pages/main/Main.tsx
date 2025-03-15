import React from "react";
import style from "./main.module.scss";
import { SideBar } from "./ui/sidebar/SideBar";
import { MessageContainer } from "./ui/messagecontainer/MessageContainer";

export const Main: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.main}>
			<div className={style.container}>
				<SideBar />
				<MessageContainer />
			</div>
		</div>
	);
};

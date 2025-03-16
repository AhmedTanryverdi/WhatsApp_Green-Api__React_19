import React from "react";
import { Header } from "./ui/header/Header";
import { ChatList } from "./ui/chatlist/ChatList";
import style from "./sidebar.module.scss";

export const SideBar: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.sidebar}>
			<div className={style.content}>
				<Header />
				<ChatList />
			</div>
		</div>
	);
};

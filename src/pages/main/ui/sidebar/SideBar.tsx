import React from "react";
import { Header } from "./ui/header/Header";
import { ChatList } from "./ui/chatlist/ChatList";
import style from "./sidebar.module.scss";
import { Setting } from "./ui/setting/Setting";

export const SideBar: React.FC = (): React.JSX.Element => {
	return (
		<div className={style.sidebar}>
			<div className={style.content}>

				<div className={style.setting}>
					<Setting />
				</div>
				<div className={style.chatContent}>
					<Header />
					<ChatList />
				</div>
			</div>
		</div>
	);
};

import React from "react";
import avatar from "../../../../../../../../shared/assets/icons/user.png";
import style from "./chatitem.module.scss";
//import { urlAvatar } from "../../../../../../../../shared/assets/constants/constans";

export const ChatItem: React.FC<{
	number: string;
	textMessage: string;
	timestamp: number;
}> = ({ number, textMessage, timestamp }): React.JSX.Element => {
	return (
		<li className={style.chatitem}>
			<button className={style.content}>
				<div className={style.avatar}>
					<img
						width="64"
						height="64"
						src={avatar}
						alt="external-muslim-avatar-fauzidea-outline-color-fauzidea"
					/>
				</div>
				<div className={style.inner}>
					<div className={style.aboutChat}>
						<div className={style.about}>
							<p className={style.name}>{number}</p>
							<p className={style.data}>
								{new Date(timestamp).getDay().toString() +
									":" +
									new Date(timestamp).getMonth().toString() +
									":" +
									new Date(timestamp).getFullYear()}
							</p>
						</div>
						<p className={style.lastMessage}>{textMessage}</p>
					</div>
				</div>
			</button>
		</li>
	);
};

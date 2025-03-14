import React from "react";
import style from "./chatitem.module.scss";

export const ChatItem: React.FC = (): React.JSX.Element => {
	return (
		<li className={style.chatitem}>
			<div className={style.content}>
				<div className={style.avatar}>
					<img
						width="64"
						height="64"
						src="https://img.icons8.com/external-fauzidea-outline-color-fauzidea/64/external-muslim-avatar-fauzidea-outline-color-fauzidea.png"
						alt="external-muslim-avatar-fauzidea-outline-color-fauzidea"
					/>
				</div>
				<div className={style.inner}>
					<div className={style.aboutChat}>
						<div className={style.about}>
							<p className={style.name}>Name</p>
							<p className={style.data}>Вчера</p>
						</div>

						<p className={style.lastMessage}>last message</p>
					</div>
				</div>
			</div>
		</li>
	);
};

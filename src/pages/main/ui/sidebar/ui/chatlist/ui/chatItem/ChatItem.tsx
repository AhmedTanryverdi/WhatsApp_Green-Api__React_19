import React, { useRef } from "react";
import avatar from "../../../../../../../../shared/assets/icons/user.png";
import {
	RootState,
	useAppDispatch,
} from "../../../../../../../../app/redux/store";
import {
	getChatHistory,
	setChatId,
} from "../../../../../../../../entities/model/slices/chatHistory/chatHistory";
import { urlChatHistory } from "../../../../../../../../shared/assets/constants/constans";
import style from "./chatitem.module.scss";
import { useSelector } from "react-redux";
import { addCount } from "../../../../../../../../entities/model/slices/selectchat/selectchat";

export const ChatItem: React.FC<{
	number: string;
	textMessage: string;
	timestamp: number;
}> = ({ number, textMessage, timestamp }): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const isSelected = useSelector<RootState, boolean>(
		(state) => state.isSelected.isSelected
	);
	const ref = useRef<HTMLInputElement>(null);
	return (
		<li className={style.chatitem}>
			<div className={style.wrapper}>
				{isSelected && (
					<input
						ref={ref}
						type="checkbox"
						onClick={() => {
							if (ref.current?.checked) {
								dispatch(addCount(1));
							}else{
								console.log("test")
							}
						}}
					/>
				)}
				<button
					className={style.content}
					onClick={() => {
						dispatch(setChatId(number));
						dispatch(
							getChatHistory({
								url: urlChatHistory,
								chatid: number,
							})
						);
					}}
				>
					<div className={style.avatar}>
						<img
							width="64px"
							height="64px"
							src={avatar}
							alt="external-muslim-avatar-fauzidea-outline-color-fauzidea"
						/>
					</div>
					<div className={style.inner}>
						<div className={style.aboutChat}>
							<div className={style.about}>
								<p className={style.name}>
									{number.slice(0, -5)}
								</p>
								<p className={style.data}>
									{new Date(timestamp).getDay().toString() +
										":" +
										new Date(timestamp)
											.getMonth()
											.toString() +
										":" +
										new Date(timestamp).getFullYear()}
								</p>
							</div>
							<p className={style.lastMessage}>{textMessage}</p>
						</div>
					</div>
				</button>
			</div>
		</li>
	);
};

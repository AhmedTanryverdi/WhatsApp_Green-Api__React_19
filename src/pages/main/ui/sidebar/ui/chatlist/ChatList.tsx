import React, { useEffect, useState } from "react";
import { ChatItem } from "./ui/chatItem/ChatItem";
import { ChatType } from "../../../../../../shared/assets/types/types";
import { getChats } from "./utils/functions";
import { SearchChat } from "./ui/searchblock/SearchChat";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../../app/redux/store";
import { Counter } from "./ui/counter/Counter";
import style from "./chatlist.module.scss";

const url =
	"https://1103.api.green-api.com/waInstance1103205244/lastOutgoingMessages/30a3de3ae7be4147a5fd2b0c600b6b10e015a31a91124d33b3/?minutes=1000000";


export const ChatList: React.FC = (): React.JSX.Element => {
	const [chatID, setChatID] = useState<ChatType[]>([]);

	const isSelected = useSelector<RootState, boolean>(state=>state.isSelected.isSelected);

	useEffect(() => {
		getChats(url).then((data: ChatType[]) => {
			const chatSet = new Set();

			const uniqueChats: ChatType[] = [];
			data.forEach((chat) => {
				if (!chatSet.has(chat.chatId)) {
					chatSet.add(chat.chatId);
					uniqueChats.push(chat);
				}
			});

			setChatID(uniqueChats);
		});
	}, []);

	return (
		<div className={style.chatlist}>
			<div className={style.container}>
				<div className={style.content}>
					{!isSelected && <SearchChat /> || <Counter />}
					<div className={style.chatItems}>
						<ul>
							{chatID.map((chat, index) => {
								return (
									<ChatItem
										number={chat.chatId}
										timestamp={chat.timestamp}
										textMessage={chatID[index].textMessage}
										key={index}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

import React, { useEffect, useState } from "react";
import { ChatItem } from "./ui/chatItem/ChatItem";
import { ChatType } from "../../../../../../shared/assets/types/types";
import { getChats } from "./utils/functions";
import style from "./chatlist.module.scss";

const url =
	"https://1103.api.green-api.com/waInstance1103205244/lastOutgoingMessages/30a3de3ae7be4147a5fd2b0c600b6b10e015a31a91124d33b3/?minutes=1000000";

export const ChatList: React.FC = (): React.JSX.Element => {
	const [chatID, setChatID] = useState<ChatType[]>([]);

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
					<div className={style.searchChat}>
						<div className={style.inner}>
							<button className={style.searchIcon}>
								<span>
									<svg
										viewBox="0 0 24 24"
										height="24"
										width="24"
										preserveAspectRatio="xMidYMid meet"
										version="1.1"
										x="0px"
										y="0px"
										enableBackground="new 0 0 24 24"
									>
										<title>search</title>
										<path
											fill="currentColor"
											d="M15.009,13.805h-0.636l-0.22-0.219c0.781-0.911,1.256-2.092,1.256-3.386 c0-2.876-2.332-5.207-5.207-5.207c-2.876,0-5.208,2.331-5.208,5.207s2.331,5.208,5.208,5.208c1.293,0,2.474-0.474,3.385-1.255 l0.221,0.22v0.635l4.004,3.999l1.194-1.195L15.009,13.805z M10.201,13.805c-1.991,0-3.605-1.614-3.605-3.605 s1.614-3.605,3.605-3.605s3.605,1.614,3.605,3.605S12.192,13.805,10.201,13.805z"
										></path>
									</svg>
								</span>
								<span></span>
							</button>
							<input
								type="text"
								className={style.searchInput}
								placeholder="Поиск"
							/>
						</div>
					</div>
					<div className={style.chatItems}>
						<ul>
							{chatID.map((chat, index) => {
								return (
									<ChatItem
										number={chat.chatId.slice(0, -5)}
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

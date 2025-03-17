import React from "react";
import { InputMessage } from "../../../../widgets/inputmessage/InputMessage";
import { AboveMessageContainer } from "../../../../widgets/aboveMessageContainer/AboveMessageContainer";
import style from "./messagecontainer.module.scss";
import { MessageList } from "./messagelist/MessageList";



export const MessageContainer: React.FC = (): React.JSX.Element => {

	return (
		<div className={style.messageContainer}>
			<div className={style.container}>
				<AboveMessageContainer />
				<MessageList />
				<InputMessage />
			</div>
		</div>
	);
};

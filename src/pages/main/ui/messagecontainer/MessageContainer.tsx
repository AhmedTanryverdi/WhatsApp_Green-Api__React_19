import React, { useEffect } from "react";
import style from "./messagecontainer.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/redux/store";
import { ChatType } from "../../../../shared/assets/types/types";
import { InputMessage } from "../../../../widgets/inputmessage/InputMessage";
import { AboveMessageContainer } from "../../../../widgets/aboveMessageContainer/AboveMessageContainer";

export const MessageContainer: React.FC = (): React.JSX.Element => {
	const chat = useSelector<RootState, ChatType[]>((state) => state.chat.chat);

	useEffect(() => {
		console.log(chat);
	}, [chat]);
	return (
		<div className={style.messageContainer}>
			<div className={style.container}>
				<AboveMessageContainer />

				<div className={style.messageList}>
					<div className={style.banner}>
						<span>
							<svg
								viewBox="0 0 10 12"
								height="12"
								width="10"
								preserveAspectRatio="xMidYMid meet"
								version="1.1"
							>
								<title>lock-small</title>
								<path
									d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z"
									fill="currentColor"
								></path>
							</svg>
							Сообщения защищены сквозным шифрованием. Третьи
							лица, включая WhatsApp, не могут прочитать или
							прослушать их. Нажмите, чтобы узнать подробнее
						</span>
					</div>
					<div className={style.block}>
						<ul>
							{chat.map((message, index) => {
								return (
									<li key={index} className={style.message}>
										<div>{message.textMessage}</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<InputMessage />
			</div>
		</div>
	);
};

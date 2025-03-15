import React, { useEffect } from "react";
import style from "./messagecontainer.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../../app/redux/store";
import { ChatType } from "../../../../shared/assets/types/types";

export const MessageContainer: React.FC = (): React.JSX.Element => {
	const chat = useSelector<RootState, ChatType[]>((state) => state.chat.chat);
	
	useEffect(() => {
		console.log(chat);
	}, [chat]);
    
	return (
		<div className={style.messageContainer}>
			<div className={style.container}>
				<div className={style.messageList}>
                    <ul>
                        {
                            chat.map((message, index)=>{
                                return <li key={index}>{message.textMessage}</li>
                            })
                        }
                    </ul>
                </div>
			</div>
		</div>
	);
};

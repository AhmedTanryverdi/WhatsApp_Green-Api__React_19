import React from "react";
import { urlLogout } from "../../../../../../../../shared/assets/constants/constans";
import { useAppDispatch } from "../../../../../../../../app/redux/store";
import { setState } from "../../../../../../../../entities/model/slices/user/userSlice";
import { setSelected } from "../../../../../../../../entities/model/slices/selectchat/selectchat";
import style from "./dropdownitem.module.scss";


export const DropDownItem: React.FC<{ text: string }> = ({
	text,
}): React.JSX.Element => {
	const dispatch = useAppDispatch();

	const actionItem = () => {
		switch (text) {
			case "Выйти": {
				fetch(urlLogout)
					.then((res) => {
						if (res.ok) {
							dispatch(setState("notAuthorized"));
						}
					})
					.catch((err) => console.log(err));
				break;
			}

			case "Выбрать чаты": {
				dispatch(setSelected(true));
			}
		}
	};
	return (
		<li className={style.item} onClick={actionItem}>
			<div>{text}</div>
		</li>
	);
};

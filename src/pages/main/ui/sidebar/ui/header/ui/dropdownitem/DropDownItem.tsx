import React from "react";
import style from "./dropdownitem.module.scss";
import { urlLogout } from "../../../../../../../../shared/assets/constants/constans";
import { useAppDispatch } from "../../../../../../../../app/redux/store";
import { setState } from "../../../../../../../../entities/model/slices/user/userSlice";

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
		}
	};
	return (
		<li className={style.item} onClick={actionItem}>
			<div>{text}</div>
		</li>
	);
};

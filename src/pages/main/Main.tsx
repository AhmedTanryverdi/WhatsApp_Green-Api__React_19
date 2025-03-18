import React, { useEffect } from "react";
import { SideBar } from "./ui/sidebar/SideBar";
import { MessageContainer } from "./ui/messagecontainer/MessageContainer";
import { useSelector } from "react-redux";
import { RootState } from "../../app/redux/store";
import { useNavigate } from "react-router-dom";
import style from "./main.module.scss";

export const Main: React.FC = (): React.JSX.Element => {
	const statusAuth = useSelector<RootState, string>(
		(state) => state.user.statusAuth
	);
	const navigate = useNavigate();
	useEffect(() => {
		if (statusAuth === "notAuthorized") {
			navigate("/");
		}
	}, [statusAuth]);

	return (
		<div className={style.main}>
			<div className={style.container}>
				<SideBar />
				<MessageContainer />
			</div>
		</div>
	);
};

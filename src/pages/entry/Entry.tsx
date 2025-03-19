import React, { useEffect } from "react";
import { Header } from "../../widgets/header/Header";
import { Entrybody } from "./ui/Entrybody";
import { RootState, useAppDispatch } from "../../app/redux/store";
import { useSelector } from "react-redux";
import { getStatusAuth } from "../../entities/model/slices/user/userSlice";
import { apiUrl, idInstance, apiTokenInstance } from "../../shared";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

export const Entry: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const statusAuth = useSelector<RootState, string>(
		(state) => state.user.statusAuth
	);
	const navigate = useNavigate();

	useEffect(() => {
		const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
		dispatch(getStatusAuth(url));

		const intervalId = setInterval(()=>dispatch(getStatusAuth(url)), 2500);
		return ()=> clearInterval(intervalId);
	}, []);

	if (statusAuth === "authorized") {
		navigate("/main");
	}

	return (
		<div className={style.entry}>
			<Header />
			<Entrybody />
		</div>
	);
};

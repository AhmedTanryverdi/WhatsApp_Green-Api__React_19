import React, { useLayoutEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Entry, Main } from "../../pages/index";
import { useAppDispatch, RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { apiTokenInstance, apiUrl, idInstance } from "../../shared";
import { getStateUser } from "../../entities/model/slices/user/userSlice";

export const App: React.FC = (): React.JSX.Element => {
	const dispatch = useAppDispatch();
	const stateAuth = useSelector<RootState, string>(
		(state) => state.user.stateAuth
	);
	const navigate = useNavigate();

	useLayoutEffect(() => {
		const url = `${apiUrl}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`;
		dispatch(getStateUser(url));
	}, [stateAuth]);

	if (stateAuth === "authorized") {
		navigate("/main");
	}

	return (
		<>
			<Routes>
				<Route path="/" element={<Entry />} />
				<Route path="main" element={<Main />} />
			</Routes>
		</>
	);
};

export default App;

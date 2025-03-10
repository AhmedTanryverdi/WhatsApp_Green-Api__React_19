import React, { useLayoutEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Entry, Main } from "../../pages/index";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

export const App: React.FC = (): React.JSX.Element => {
	const stateAuth = useSelector<RootState, string>(
		(state) => state.user.statusAuth
	);
	const navigate = useNavigate();

	useLayoutEffect(() => {}, [stateAuth]);

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

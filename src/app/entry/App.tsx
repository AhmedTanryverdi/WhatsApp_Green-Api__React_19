import React from "react";
import { Route, Routes } from "react-router-dom";
import { Entry, Main } from "../../pages/index";

export const App: React.FC = (): React.JSX.Element => {
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

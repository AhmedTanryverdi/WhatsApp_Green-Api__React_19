import React from "react";
import { Route, Routes } from "react-router-dom";
import { Entry } from "../../pages/entry/Entry";

export const App: React.FC = (): React.JSX.Element => {
	return (
		<>
		<Routes>
			<Route path="/" element={<Entry />}/>
		</Routes>
		</>
	);
};

export default App;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "../../entities/model/slices/user/userSlice";
import onNumberSlice from '../../entities/model/slices/onnumber/OnNumber'

export const store = configureStore({
	reducer: {
		user: userSlice,
		onNumber: onNumberSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

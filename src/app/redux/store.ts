import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "../../entities/model/slices/user/userSlice";
import onNumberSlice from "../../entities/model/slices/onnumber/onNumber";
import chatHistorySlice from "../../entities/model/slices/chatHistory/chatHistory";
import selectChatSlice from '../../entities/model/slices/selectchat/selectchat';

export const store = configureStore({
	reducer: {
		user: userSlice,
		onNumber: onNumberSlice,
		chat: chatHistorySlice,
		isSelected: selectChatSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();



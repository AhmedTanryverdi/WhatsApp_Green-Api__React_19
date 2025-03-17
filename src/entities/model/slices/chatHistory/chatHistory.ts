import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ChatType } from "../../../../shared/assets/types/types";

export const getChatHistory = createAsyncThunk(
	"getChatHistory/chatHistorySlice",
	async ({ url, chatid }: { url: string; chatid: string }) => {
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ chatId: chatid, count: 1000000 }),
		});

		if (!response.ok) {
			return [];
		}

		return await response.json();
	}
);

const initialState: {
	chatid: string;
	chat: ChatType[];
} = {
	chatid: "",
	chat: [],
};

const chatHistorySlice = createSlice({
	name: "chatHistorySlice",
	initialState,
	reducers: {
		setChatId(state, actions) {
			state.chatid = actions.payload;
		},

		addMessage(state, actions) {
			state.chat = [...state.chat, actions.payload];
		},
	},

	extraReducers: (builder) => {
		builder.addCase(getChatHistory.fulfilled, (state, actions) => {
			state.chat = actions.payload;
		});
	},
});

export const { setChatId, addMessage } = chatHistorySlice.actions;
export default chatHistorySlice.reducer;

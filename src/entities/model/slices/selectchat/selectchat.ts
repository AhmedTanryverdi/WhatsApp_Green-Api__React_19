import { createSlice } from "@reduxjs/toolkit";

const initialState: {
	count: number;
	isSelected: boolean;
} = {
	count: 0,
	isSelected: false,
};

const selectChatSlice = createSlice({
	name: "selectChatSlice",
	initialState,
	reducers: {
		setSelected(state, actions) {
			state.isSelected = actions.payload;
		},

		addCount(state, actions) {
			state.count = state.count + actions.payload;
		},
	},
});

export const { setSelected, addCount } = selectChatSlice.actions;
export default selectChatSlice.reducer;

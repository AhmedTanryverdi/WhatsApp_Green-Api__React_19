import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getStateUser = createAsyncThunk(
	"getStateUser/userSlice",
	async (url: string)=>{

	}
)


type UserType = {
	stateAuth: string;
	apiUrl: string;
	idInstance: string;
	apiTokenInstance: string;
};

const initialState: UserType = {
	stateAuth: "",
	apiUrl: "",
	idInstance: "",
	apiTokenInstance: "",
};
const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setState(state, actions) {
			state.stateAuth = actions.payload;
		},
	},
});

export const { setState } = userSlice.actions;
export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getStatusAuth = createAsyncThunk(
	"getStatusUser/userSlice",
	async (url: string): Promise<string> => {
		const response = await fetch(url);

		const status = await response.json();

		return status.stateInstance;
	}
);

export const getAuthCode = createAsyncThunk(
	"getAuthCode/userSlice",
	async ({ url, phoneNumber }: { url: string; phoneNumber: string }) => {
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(phoneNumber),
		});

		const code = await response.json();
		return code;
	}
);

type UserType = {
	statusAuth: string;
	auth: {
		status: string;
		code: string;
	};
	apiUrl: string;
	idInstance: string;
	apiTokenInstance: string;
};

const initialState: UserType = {
	statusAuth: "",
	auth: {
		status: "",
		code: "",
	},
	apiUrl: "",
	idInstance: "",
	apiTokenInstance: "",
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setState(state, actions) {
			state.statusAuth = actions.payload;
		},
	},

	extraReducers: builder=>{
		builder
			.addCase(getAuthCode.fulfilled, (state, actions)=>{
				state.auth = actions.payload
			});

		builder.addCase(getStatusAuth.fulfilled, (state, actions) => {
			state.statusAuth = actions.payload;
		});
	}
});

export const { setState } = userSlice.actions;
export default userSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../../../../shared/assets/types/types";

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

		const number = Number('7' + phoneNumber);
		const response = await fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ phoneNumber: number }),
		});

		if(!response.ok){
			return {
				status: "",
				code: "",
			};
		}

		const code = await response.json();
		return code;
	}
);

const initialState: UserType = {
	
	statusAuth: "",
	auth: {
		status: "",
		code: "",
	},
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setState(state, actions) {
			state.statusAuth = actions.payload;
		},
	},

	extraReducers: (builder) => {
		builder
		.addCase(getAuthCode.fulfilled, (state, actions) => {
			state.auth = actions.payload;
		})
		.addCase(getAuthCode.rejected, (state, actions)=>{
			state.auth = actions.payload as {status: string, code: string};
		})

		builder.addCase(getStatusAuth.fulfilled, (state, actions) => {
			state.statusAuth = actions.payload;
		});
	},
});

export const { setState } = userSlice.actions;
export default userSlice.reducer;

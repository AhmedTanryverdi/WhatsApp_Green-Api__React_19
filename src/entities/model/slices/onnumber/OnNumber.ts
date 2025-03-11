import { createSlice } from "@reduxjs/toolkit";


type NumberType = {
    isNumber: boolean;
}

const initialState: NumberType = {
    isNumber: false
}

const onNumberSlice = createSlice({
    name: "onNumberSlice",
    initialState,
    reducers: {
        setStatusNumber(state, actions){
            state.isNumber = actions.payload;
        }
    }
})

export const {setStatusNumber} = onNumberSlice.actions;
export default onNumberSlice.reducer;
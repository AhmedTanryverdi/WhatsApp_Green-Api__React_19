import { createSlice } from "@reduxjs/toolkit";
import { NumberType } from "../../../../shared/assets/types/types";


const initialState: NumberType = {
    isNumber: true
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
import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
    name: "score",
    initialState: {
        score: 0
    },
    reducers: {
        changeScore(state, action) {
            state.score = action.payload
        }
    }
})

export const { changeScore } = scoreSlice.actions
export const scoreReducer = scoreSlice.reducer;
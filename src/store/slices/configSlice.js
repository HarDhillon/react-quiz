import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        amount: 1,
        category: "any",
        difficulty: "any",
        type: "any",
        submitted: false
    },
    reducers: {
        changeAmount(state, action) {
            state.amount = action.payload
        },
        changeCategory(state, action) {
            state.category = action.payload
        },
        changeDifficulty(state, action) {
            state.difficulty = action.payload
        },
        changeType(state, action) {
            state.type = action.payload
        },
        changeSubmitted(state, action) {
            state.submitted = action.payload
        },
    }
})

export const { changeAmount, changeCategory, changeDifficulty, changeType, changeSubmitted } = configSlice.actions
export const configReducer = configSlice.reducer;
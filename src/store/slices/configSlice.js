import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "config",
    initialState: {
        amount: 1,
        category: "any",
        difficulty: "any",
        type: "any"
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
        }
    }
})

export const { changeAmount, changeCategory, changeDifficulty, changeType } = configSlice.actions
export const configReducer = configSlice.reducer;
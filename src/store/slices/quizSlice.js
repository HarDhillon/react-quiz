import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        userScore: 0,
        complete: false
    },
    reducers: {
        changeUserScore(state, action) {
            state.userScore += 1
        },
        changeComplete(state, action) {
            state.complete = action.payload
        }
    }
})

export const { changeUserScore, changeComplete } = quizSlice.actions
export const quizReducer = quizSlice.reducer;
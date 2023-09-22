import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "questions",
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

export const { changeUserScore } = quizSlice.actions
export const quizReducer = quizSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        userScore: 0,
        questionsAnswered: 0
    },
    reducers: {
        changeUserScore(state, action) {
            if (action.payload === 0) {
                state.userScore = 0
            }
            else {
                state.userScore += 1
            }
        },
        changeQuestionsAnswered(state, action) {
            if (action.payload === 0) {
                state.questionsAnswered = 0
            }
            else {
                state.questionsAnswered += 1
            }
        }
    }
})

export const { changeUserScore, changeQuestionsAnswered } = quizSlice.actions
export const quizReducer = quizSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const quizSlice = createSlice({
    name: "quiz",
    initialState: {
        userScore: 0,
        questionsAnswered: 0,
        questionTimeLeft: 15
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
        },
        changeQuestionTimeLeft(state, action) {
            // Pass positive number to change new remaining time left, pass a negative to subtract
            if (action.payload > 0) {
                state.questionTimeLeft = action.payload
            }
            else {
                state.questionTimeLeft += action.payload
            }
        }
    }
})

export const { changeUserScore, changeQuestionsAnswered, changeQuestionTimeLeft } = quizSlice.actions
export const quizReducer = quizSlice.reducer;
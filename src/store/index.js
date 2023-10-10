import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { questionsApi } from "./apis/questionsApi";
import { highScoresApi, useFetchHighScoresQuery, usePostHighScoreMutation } from "./apis/highScoresApi";
import { configReducer, changeAmount, changeCategory, changeDifficulty, changeType, changeSubmitted } from "./slices/configSlice";
import { quizReducer, changeUserScore, changeQuestionsAnswered, changeQuestionTimeLeft } from "./slices/quizSlice";

export const store = configureStore({
    reducer: {
        config: configReducer,
        quiz: quizReducer,
        [highScoresApi.reducerPath]: highScoresApi.reducer,
        [questionsApi.reducerPath]: questionsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(questionsApi.middleware)
            .concat(highScoresApi.middleware)
    }
})

setupListeners(store.dispatch);

export {
    useFetchQuestionsQuery
} from "./apis/questionsApi"

// Quiz config
export { changeAmount, changeCategory, changeDifficulty, changeType, changeSubmitted }
// Quiz progress / score
export { changeUserScore, changeQuestionsAnswered, changeQuestionTimeLeft }
// High Score
export { useFetchHighScoresQuery, usePostHighScoreMutation }
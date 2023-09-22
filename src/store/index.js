import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { questionsApi } from "./apis/questionsApi";
import { configReducer, changeAmount, changeCategory, changeDifficulty, changeType, changeSubmitted } from "./slices/configSlice";
import { quizReducer, changeUserScore } from "./slices/quizSlice";

export const store = configureStore({
    reducer: {
        config: configReducer,
        quiz: quizReducer,
        [questionsApi.reducerPath]: questionsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(questionsApi.middleware)
    }
})

setupListeners(store.dispatch);

export {
    useFetchQuestionsQuery
} from "./apis/questionsApi"

export { changeAmount, changeCategory, changeDifficulty, changeType, changeSubmitted, changeUserScore }
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { questionsApi } from "./apis/questionsApi";
import { configReducer, changeAmount, changeCategory, changeDifficulty, changeType, changeSubmitted } from "./slices/configSlice";
import { scoreReducer, changeScore } from "./slices/scoreSlice";

export const store = configureStore({
    reducer: {
        config: configReducer,
        score: scoreReducer,
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

export { changeAmount, changeCategory, changeDifficulty, changeType, changeSubmitted, changeScore }
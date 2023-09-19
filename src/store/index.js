import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { questionsApi } from "./apis/questionsApi";

export const store = configureStore({
    reducer: {
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
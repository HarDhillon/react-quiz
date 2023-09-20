import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const questionsApi = createApi({
    reducerPath: "questions",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://opentdb.com/api.php"
    }),
    endpoints(builder) {
        return {
            fetchQuestions: builder.query({
                // options = { amount: 50, category: 23 }
                query: (options) => {
                    return {
                        url: "/",
                        params: { ...options },
                        method: "GET"
                    }
                }
            })
        }
    }
})

export const {
    useFetchQuestionsQuery
} = questionsApi

export { questionsApi }
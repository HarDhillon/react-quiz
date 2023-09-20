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
                    // Filter out options with values equal to "any"
                    const filteredOptions = Object.keys(options).reduce((acc, key) => {
                        if (options[key] !== "any") {
                            acc[key] = options[key];
                        }
                        return acc;
                    }, {});

                    return {
                        url: "",
                        params: filteredOptions,
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
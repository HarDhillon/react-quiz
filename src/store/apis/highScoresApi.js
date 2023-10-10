import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const highScoresApi = createApi({
    reducerPath: "highScore",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            fetchHighScores: builder.query({
                query: (difficulty) => {
                    return {
                        url: `/${difficulty}`,
                        method: "GET"
                    }
                }
            })

            // TODO Post High Score
        }
    }
})

export const { useFetchHighScoresQuery } = highScoresApi

export { highScoresApi }
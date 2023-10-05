import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const highScoresApi = createApi({
    reducerPath: "highScore",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            fetchHighScores: builder.query({
                query: () => {
                    return {
                        url: "/highscores",
                        method: "GET"
                    }
                }
            })

            // TODO Post High Score
        }
    }
})


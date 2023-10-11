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
                        url: `/leaderboard`,
                        method: "GET"
                    }
                }
            }),

            postHighScore: builder.mutation({
                query: (data) => {
                    return {
                        url: `/leaderboard/${data.difficulty}`,
                        body: {
                            initials: data.initials,
                            score: data.score
                        },
                        method: "POST"
                    }
                }
            })
        }
    }
})

export const { useFetchHighScoresQuery, usePostHighScoreMutation } = highScoresApi

export { highScoresApi }
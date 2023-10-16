import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const highScoresApi = createApi({
    reducerPath: "highScore",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3005"
    }),
    endpoints(builder) {
        return {
            // TODO separate fetch quieries to invalidate correctly since JSON-Server only allows us to post and fetch
            // A single level deep

            fetchHighScores: builder.query({

                providesTags: (result, error, difficulty) => {
                    const tag = [{ type: "Difficulty", difficulty }]
                    return tag
                },

                query: (difficulty) => {
                    return {
                        url: `/${difficulty}`,
                        method: "GET"
                    }
                }
            }),

            postHighScore: builder.mutation({

                invalidatesTags: (result, error, data) => {
                    return [{ type: "Difficulty", difficulty: data.difficulty }]
                },

                query: (data) => {
                    return {
                        url: `/${data.difficulty}`,
                        body: {
                            name: data.initials,
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
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post, Posts } from "@/shared/types";

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/",
    }),
    endpoints: (builder) => ({
        getPost: builder.query<Post, string>({
            query: (id) => `posts/${id}`,
        }),
        getPosts: builder.query<Posts, [number, number]>({
            query: ([limit, page]) => ({
                url: "posts",
                params: {
                    _limit: limit,
                    _page: page,
                },
            }),
        }),
    }),
});

export const { useGetPostQuery, useGetPostsQuery } = postsApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),

  endpoints: (builder) => ({
    users: builder.query({
      query: (url) => ({
        url: `/${url}`,
        method: "GET",
      }),
    }),
  }),
});

export const { getUsersQuery } = usersApi;

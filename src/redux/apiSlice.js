import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const gameApi = createApi({
  reducerPath: 'gameApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getList: builder.query({
      query: (url) => `${url}?key=${API_KEY}`
    }),
    getGenreList: builder.query({
      query: ({ url, id, page }) => ({
        url: url,
        method: 'GET',
        params: { page: page, genres: id, key: API_KEY }
      })
    }),
    getPlatformList: builder.query({
      query: ({ url, id, page }) => ({
        url: url,
        method: 'GET',
        params: { page: page, platforms: id, key: API_KEY }
      })
    }),
    getDetails: builder.query({
      query: (url) => `${url}?key=${API_KEY}`
    })
  })
});

export const {
  useGetListQuery,
  useGetGenreListQuery,
  useGetPlatformListQuery,
  useGetDetailsQuery
} = gameApi;

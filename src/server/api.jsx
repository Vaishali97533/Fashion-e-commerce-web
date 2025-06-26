// src/server/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api', // default
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => '/products',
    }),
  }),
});

export const { useGetAllProductsQuery } = api;

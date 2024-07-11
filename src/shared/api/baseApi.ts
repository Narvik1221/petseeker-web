import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/dd13a2d7-74dc-4802-a946-1798be26fa8a" }),
  endpoints: (builder) => ({}),
});
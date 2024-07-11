import { Card } from "../index";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseApi } from '../../../shared/api';
export const cardsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCards: builder.query<Card[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;

import { Pet } from "../index";
import { baseApi } from '../../../shared/api';
export const petsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPets: builder.query<Pet[], void>({
      query: () => "/",
    }),
  }),
});

export const { useGetPetsQuery } = petsApi;

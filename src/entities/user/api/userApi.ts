// src/entities/user/api.ts
import { baseApi } from "../../../shared/api";

type LoginResponse = {
  token: string;
};

type LoginRequest = {
  phoneNumber: string;
  name: string;
};

export const userApi = baseApi.injectEndpoints({

  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;

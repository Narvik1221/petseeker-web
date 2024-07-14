import { baseApi } from "../../../shared/api";
import {
  LoginResponse,
  LoginRequest,
  ConfirmResponse,
  ConfirmRequest,
} from "../model/userType";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    confirm: builder.mutation<ConfirmResponse, ConfirmRequest>({
      query: (body) => ({
        url: "/auth/confirm",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useConfirmMutation } = userApi;


import { baseApi } from "../../../shared/api";

type LoginResponse = {
  success: boolean;
};

type LoginRequest = {
  phoneNumber: string;
  name: string;
};


type ConfirmRequest = {
  code: string;
  phoneNumber: string;
};

type ConfirmResponse = {
  token: string;
  success: boolean;
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
    confirm: builder.mutation<ConfirmResponse, ConfirmRequest>({
      query: (credentials) => ({
        url: "/auth/confirm",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation,useConfirmMutation } = userApi;

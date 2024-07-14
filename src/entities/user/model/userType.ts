export type User = {
  id: string;
  phoneNumber: string;
};
export type UserState = {
  token: string | null;
  user: User | null;
  phoneNumber: string;
  name: string;
  code: string;
  isConfirm: boolean;
};

export type LoginResponse = {
  success: boolean;
};

export type LoginRequest = {
  phoneNumber: string;
  name: string;
};

export type ConfirmRequest = {
  code: string;
  phoneNumber: string;
};

export type ConfirmResponse = {
  token: string;
  success: boolean;
};

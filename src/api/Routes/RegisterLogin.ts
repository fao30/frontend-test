import api from "@/api/api";

export const userLogin = async (body: TLoginForm) => {
  const res = await api.post(`/auth/login`, body);
  return res.data as TLoginResponse;
};

export const userForgetPassword = async (body: { email: string }) => {
  const res = await api.post(`/password`, body);
  return res.data as unknown;
};

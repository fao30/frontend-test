import api from "@/api/api";

export const getUsers = async () => {
  const res = await api.get(`/users`);
  return res.data as unknown;
};

export const getSubscribersJobAppliers = async ({
  is_subscribers,
  limit,
  page,
  month,
  year,
}: {
  is_subscribers?: boolean;
  limit?: number;
  page?: number;
  month?: string;
  year?: string;
}) => {
  const params = new URLSearchParams();
  params.append("is_subscribers", is_subscribers?.toString());
  if (limit) params.append("limit", limit?.toString());
  if (page) params.append("page", page?.toString());
  if (month) params.append("month", month);
  if (year) params.append("year", year);
  const url = `/users/admins/users?${params.toString()}`;
  const res = await api.get(url);
  return res.data as SubscribersResponse;
};

export const getUserById = async (
  userId: string = "",
  jobId: string | null = ""
) => {
  const res = await api.get(`/users/${userId}?job_id=${jobId}`);
  return res.data as {
    data: TGetMeResponse;
  };
};

export const deleteUserById = async (userId: string) => {
  const res = await api.delete(`/users/${userId}`);
  return res.data as unknown;
};

export const getMe = async () => {
  const res = await api.get(`/auth/getme`);
  return res.data as TGetMeResponse;
};

export const putStatusJobApplier = async (
  userId: string,
  body: { status_id: number; user_id: string }
) => {
  const res = await api.put(`/users/status/${userId}`, body);
  return res.data as unknown;
};

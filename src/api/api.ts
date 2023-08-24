import { BASE_URL } from "@/utils/utils";
import axios, { AxiosError, AxiosResponse } from "axios";
import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (request) => {
    const token = Cookies.get("access_token");
    if (token) {
      if (request.headers && token) {
        request.headers["Authorization"] = "Bearer " + token;
      }
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if ((error.response as AxiosResponse).status === 401) {
      localStorage.removeItem("user_data");
      Cookies.remove("access_token");
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default instance;

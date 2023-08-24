import Cookies from "js-cookie";

// helper
export const BASE_URL = import.meta.env.VITE_APP_API;

export const LoadToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

export const getToken = () => {
  const token = Cookies.get("access_token");
  if (!token) return;
  return token;
};

export const getUserInfo = () => {
  const user = localStorage.getItem("user_data");
  if (!user) return;
  return JSON.parse(user) as TGetMeResponse;
};

export const tableSkeleton =
  "w-full h-7 from-white text-spacecadet via-spacecadet/30  to-white bg-gradient-to-r bg-animate";

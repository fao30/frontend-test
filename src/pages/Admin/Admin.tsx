import { Fragment, useState } from "react";
import shape from "@/assets/instancelayer.png";
import Input from "./pages/AdminPanel/Input";
import { Icon } from "@iconify/react/dist/iconify.js";
import { userLogin } from "@/api/Routes/RegisterLogin";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLogin, setLogout } from "@/global/features/authSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { getMe } from "@/api/Routes/Users";
import { useMutation } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { getToken } from "@/utils/utils";

const initialValue = {
  username: "",
  password: "",
};

export default function Admin(): React.JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initialValue);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const token = getToken();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const mutationLogin = useMutation(userLogin, {
    onSuccess: async (res) => {
      dispatch(setLogin(res.access_token));
      const resp = await getMe();
      if (resp._id) {
        localStorage.setItem("user_data", JSON.stringify(resp));
        toast.success("Logged In");
        navigate("/dashboard/admin-panel");
      } else {
        dispatch(setLogout());
        toast.error("Unauthorized");
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("Can't login, incorrect email or password");
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutationLogin.mutate(data);
  };

  if (token) {
    return <Navigate to="/dashboard/admin-panel" />;
  }

  return (
    <Fragment>
      <article className="relative min-h-screen flex-wrap lg:flex-nowrap flex items-center justify-center main-padding-x py-shorter">
        <img src={shape} className="absolute centered w-full h-full -z-10" />

        <section className="relative w-full md:w-[60%] lg:w-[30rem] lg:h-[30rem] border-t-18 border-spacecadet bg-antiflash flex flex-col gap-10 p-shorter">

          <header className="text-center flex flex-col">
            <h5 className="font-argentcf text-spacecadet md:h5 h4">
              Добро пожаловать
            </h5>
          </header>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              label="Username"
              name="username"
              type="text"
              onChange={handleChange}
              value={data.username.toLowerCase()}
            />
            <section className={`flex flex-col gap-y-2`}>
              <label
                htmlFor="password"
                className="text-spacecadet content-heading p-bigger2"
              >
                Password
              </label>
              <section className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  onChange={handleChange}
                  value={data.password}
                  required
                  className="border-b bg-transparent w-full px-1 py-2 p-bigger placeholder-crayola border-crayola"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute centered-right -translate-x-4"
                >
                  <Icon width={25} icon="raphael:view" />
                </button>
              </section>
            </section>
            <button
              type="submit"
              className="mt-4 self-end w-fit bg-spacecadet text-white px-12 py-2 font-argentcf p-bigger2"
            >
              {mutationLogin.isLoading ? (
                <BeatLoader color="white" size={7} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </section>
      </article>
    </Fragment>
  );
}

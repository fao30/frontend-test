import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/Admin/logo.svg";
import { getUserInfo } from "@/utils/utils";
import { useDispatch } from "react-redux";
import { setLogout } from "@/global/features/authSlice";
import toast from "react-hot-toast";

export default function NavbarAdmin(): React.JSX.Element {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const user = getUserInfo();
  return (
    <main>
      <div className="fixed top-0 py-2 w-full bg-spacecadet z-40 flex justify-end items-center main-padding-x">
        <button
          type="button"
          onClick={() => {
            dispatch(setLogout());
            navigate("/login");
            toast.success("Logged Out");
          }}
          className="active:scale-90 flex gap-2 items-center text-white font-argentcf p-bigger hover:bg-antiflash hover:text-spacecadet px-4 py-1.5 rounded-xl"
        >
          <Icon icon="ant-design:logout-outlined" width={30} />
          Logout
        </button>
      </div>
    </main>
  );
}

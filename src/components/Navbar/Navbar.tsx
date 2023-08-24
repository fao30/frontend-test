import { Link, useLocation, useNavigate } from "react-router-dom";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";

export default function Navbar(): React.JSX.Element {
  const { pathname } = useLocation();

  return (pathname?.includes("/dashboard") ? (
    <NavbarAdmin />
  ) : null)
}

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Fragment, lazy, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setHasLogin } from "@/global/features/authSlice";
import { getToken } from "@/utils/utils";
import { getUserInfo } from "@/utils/utils";

// main pages
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));
// admin pages
const Admin = lazy(() => import("@/pages/Admin/Admin"));

const AdminPanelDetail = lazy(
  () => import("./pages/Admin/pages/AdminPanel/pages/AdminPanelDetail")
);
const AdminPanel = lazy(
  () => import("@/pages/Admin/pages/AdminPanel/AdminPanel")
);
const RequireAuthHelper = ({ children }: {
  children: React.ReactNode;
  forbiddenRoles?: number[];
}) => {
  const user = getUserInfo();
  const token = getToken();


  if (!token || !user) {
    return <Navigate to="/login" />;
  }

  return <Fragment>{children}</Fragment>;
};

const RequireAuth = memo(RequireAuthHelper);

export default function AppRoutes(): React.JSX.Element {
  const dispatch = useDispatch();
  const token = getToken();

  useEffect(() => {
    if (token) {
      dispatch(setHasLogin());
    }
  }, [dispatch, token]);

  return (
    <Routes>
      <Route element={<NotFound />} path="*" />
      <Route path="/login" element={<Admin />} />
      <Route path="/dashboard">
        <Route
          path="admin-panel"
          element={
            <RequireAuth>
              <AdminPanel />
            </RequireAuth>
          }
        />
        <Route
          path="admin-panel/detail/:uuid"
          element={
            <RequireAuth>
              <AdminPanelDetail />
            </RequireAuth>
          }
        />
        <Route
          path="admin-panel/detail"
          element={
            <RequireAuth>
              <AdminPanelDetail />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  );
}

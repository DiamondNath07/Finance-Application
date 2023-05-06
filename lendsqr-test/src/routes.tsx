import { Navigate, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import MainLayout from "./components/MainLayout";
import { IUser } from "./components/interface";
import Dashboard from "./pages/dashboard/Dashboard";
import Userdetails from "./pages/details/UserDetails";

export const routes = (user: IUser | null) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Navigate to="/auth" />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "details",
          element: <Userdetails />,
        },
      ],
    },
    {
      path: "/auth",
      element: user == null ? <Auth /> : <Navigate to="/" />,
    },
  ]);
export default routes;

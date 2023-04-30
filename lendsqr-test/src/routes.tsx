import { Navigate, createBrowserRouter } from "react-router-dom";
import Auth from "./pages/Auth";
import MainLayout from "./pages/MainLayout";

export interface IUser {
  email: string | null;
  password: string | null;
}

export const routes = (user: any) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Navigate to="/auth" />,
      // children: [
      //   {
      //     path: "check",
      //     element: <p>okay</p>,
      //   },
      // ],
    },
    {
      path: "/auth",
      element: user == null ? <Auth /> : <Navigate to="/" />,
      children: [{ path: "/", element: <Auth /> }],
    },
  ]);
export default routes;

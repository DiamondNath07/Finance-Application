import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUserData } from "../components/interface";

export const GetUserDataService = () => {
  const url =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users?per_page=500";
  return useQuery<IUserData[]>(["users"], async () => {
    const data = await axios.get(url);
    return data?.data;
  });
};

export const GetUserDetailService = () => {
  const getCurrUser: string = JSON.parse(
    localStorage.getItem("lendsqrCurrentUser") as string
  );
  const url = `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${getCurrUser}`;
  return useQuery(["details", { getCurrUser }], async () => {
    const data = await axios.get(url);
    return data;
  });
};

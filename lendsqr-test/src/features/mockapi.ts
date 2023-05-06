import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { IUserData } from "../components/interface";

export const GetUserDataService = () => {
  const url =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";
  return useQuery<IUserData[]>(["users"], async () => {
    const data = await axios.get(url);
    return data?.data;
  });
};

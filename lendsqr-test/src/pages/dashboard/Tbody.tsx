import React from "react";
import { IUserData } from "../../components/interface";
import moment from "moment";

export default function Tbody({ user }: { user: IUserData }) {
  return (
    <tr>
      <td>{user.orgName}</td>
      <td>{user.userName}</td>
      <td>{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss A")}</td>
      <td>{user.education.employmentStatus}</td>
      <td>...</td>
    </tr>
  );
}

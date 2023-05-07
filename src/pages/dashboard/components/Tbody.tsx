import React from "react";
import { IUserData } from "../../../components/interface";
import "../../../pages/App.scss";
import elipsis from "../../../assets/images/elipsis.png";
import moment from "moment";
import { useNavigate } from "react-router-dom";

export default function Tbody({ user }: { user: IUserData }) {
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    localStorage.setItem("lendsqrCurrentUser", JSON.stringify(id));
    navigate("/details");
  };
  return (
    <tr className="tBody" onClick={() => handleClick(user.id)}>
      <td className="orgName">{user.orgName}</td>
      <td>{user.userName}</td>
      <td className="email">{user.email}</td>
      <td>{user.phoneNumber}</td>
      <td>{moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss A")}</td>
      <td className="status">{user.education.employmentStatus}</td>
      <td className="optionBar">
        <img src={elipsis} alt="" />
      </td>
    </tr>
  );
}

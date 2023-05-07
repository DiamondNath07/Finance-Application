import React from "react";
import arrowBack from "../../../assets/images/arrowBack.png";
import { useNavigate } from "react-router-dom";

export default function Topsection() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <button className="backBtn" onClick={() => navigate("/")}>
        <img src={arrowBack} alt="arrowBack" />
        <p>Back to users</p>
      </button>
      <div className="topDetails">
        <h3>User Details</h3>
        <div className="actionBtns">
          <button className="btn1">blacklist user</button>
          <button className="btn2">activate user</button>
        </div>
      </div>
    </div>
  );
}

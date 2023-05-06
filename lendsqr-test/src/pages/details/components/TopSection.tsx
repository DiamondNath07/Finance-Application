import React from "react";
import arrowBack from "../../../assets/images/arrowBack.png";

export default function Topsection() {
  return (
    <div>
      {" "}
      <button className="backBtn">
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

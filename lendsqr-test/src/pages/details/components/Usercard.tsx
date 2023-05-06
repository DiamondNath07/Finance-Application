import React from "react";
import noStar from "../../../assets/images/noStar.png";
import starFull from "../../../assets/images/starFull.png";

export default function Usercard({ user }: { user: any }) {
  console.log(user);
  return (
    <section className="userBoard">
      <div className="userData">
        <img src={user?.profile.avatar} alt="userIcon" className="userFace" />
        <span className="userFullParticulars">
          <span className="userFullName"></span>
          <h3>
            {user?.profile.firstName} {user?.profile.lastName}
          </h3>
          <p>{user?.userName}</p>
        </span>
        <span className="userTier">
          <p className="userKind">User's Tier</p>
          <span className="likeCount">
            <img src={starFull} alt="icon" />
            <img src={noStar} alt="icon" />
            <img src={noStar} alt="icon" />
          </span>
        </span>
        <span className="cashRecords">
          <p>₦{user?.accountBalance}</p>
          <p className="acNo">{user?.accountNumber}/Providus Bank</p>
        </span>
      </div>
      <div className="userOption">
        <ul>
          <li className="active">General Details</li>
          <li>Documents</li>
          <li>Bank Details</li>
          <li>Loans</li>
          <li>Savings</li>
          <li>App and System</li>
        </ul>
      </div>
    </section>
  );
}

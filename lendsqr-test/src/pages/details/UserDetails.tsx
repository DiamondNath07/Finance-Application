import React from "react";
import arrowBack from '../../assets/images/arrowBack.png'
import userProfileIcon from "../../assets/images/userProfileIcon.png";
import noStar from "../../assets/images/noStar.png";
import starFull from "../../assets/images/starFull.png";


export default function Userdetails() {
  return (
    <div className="eachUserDetails">
     <section className="topSection">
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
     </section>
     <section className="userBoard">
      <div>
        <img src={userProfileIcon} alt="userIcon" />
         <span>
          <h3>Adedeji Grace</h3>
          <p>LSQFf587g90</p>
         </span>
         <span>
          <p>user Tier</p>
          <p>
            <img src={starFull} alt="icon" />
            <img src={noStar} alt="icon" />
            <img src={noStar} alt="icon" />
          </p>
         </span>
         <span>
          <p>₦200,000.00</p>
          <p>9912345678/Providus Bank</p>
         </span>
         <div className="userOption">
          <ul>
            <li>General Details</li>
            <li>Documents</li>
            <li>Bank Details</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>App and System</li>
          </ul>
         </div>
      </div>
     </section>
     <section className="">

     </section>
    </div>
  );
}

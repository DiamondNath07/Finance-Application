import React from "react";
import "./detailscard.scss";
// import { IUserData } from "../../../components/interface";

export default function PersonalInfo({ personal }: { personal: any }) {
  return (
    <div>
      <p>PersonalInformation</p>
      <section className="detailsCard">
        <div className="fullName">
          <p>Full Name</p>
          <p>
            {personal?.profile.firstName} {personal?.profile.lastName}
          </p>
        </div>
        <div className="phone">
          <p>Phone Number</p>
          <p>{personal?.profile.phoneNumber}</p>
        </div>
        <div className="email">
          <p>Email</p>
          <p>{personal?.email}</p>
        </div>
        <div className="bvn">
          <p>BVN</p>
          <p>{personal?.profile.bvn}</p>
        </div>
        <div className="gender">
          <p>Gender</p>
          <p>{personal?.profile.gender}</p>
        </div>
        <div className="maritalstatus">
          <p>Marital Status</p>
          <p>cant find ??</p>
        </div>
        <div className="children">
          <p>Children</p>
          <p>cant find ??</p>
        </div>
        <div className="typeresidence">
          <p>Type of Residence</p>
          <p>cant find ??</p>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import "./detailscard.scss";
// import { IUserData } from "../../../components/interface";

export default function PersonalInfo({ personal }: { personal: any }) {
  return (
    <div>
      <p className="infoTitle">Personal Information</p>
      <section className="detailsCard">
        <div className="fullName">
          <p>FULL NAME</p>
          <p>
            {personal?.profile.firstName} {personal?.profile.lastName}
          </p>
        </div>
        <div className="phone">
          <p>PHONE NUMBER</p>
          <p>{personal?.profile.phoneNumber}</p>
        </div>
        <div className="email">
          <p>EMAIL</p>
          <p>{personal?.email}</p>
        </div>
        <div className="bvn">
          <p>BVN</p>
          <p>{personal?.profile.bvn}</p>
        </div>
        <div className="gender">
          <p>GENDER</p>
          <p>{personal?.profile.gender}</p>
        </div>
        <div className="maritalstatus">
          <p>MARITAL STATUS</p>
          <p>Single</p>
        </div>
        <div className="children">
          <p>CHILDREN</p>
          <p>None</p>
        </div>
        <div className="typeresidence">
          <p>TYPE OF RESIDENCE</p>
          <p>Parent's Appartment</p>
        </div>
      </section>
    </div>
  );
}

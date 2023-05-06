import React from "react";
import Topsection from "./components/TopSection";
import Usercard from "./components/Usercard";
import PersonalInfo from "./components/PersonalInfo";
import { GetUserDetailService } from "../../features/mockapi";
import EducationAndEmployment from "./components/EducationAndEmployment";
import Socials from "./components/Socials";
import Guarantor from "./components/Guarantor";

export default function Userdetails() {
  const { data } = GetUserDetailService();
  return (
    <div className="eachUserDetails">
      <section className="topSection">
        <Topsection />
      </section>
      <section className="userBoard">
        <>
          <Usercard user={data?.data} />
        </>
      </section>
      <section className="generalInfo">
        <div className="personalInfo">
          <PersonalInfo personal={data?.data} />
        </div>

        <div className="personalInfo">
          <EducationAndEmployment education={data?.data} />
        </div>

        <div className="personalInfo">
          <Socials socials={data?.data} />
        </div>

        <div className="personalInfo">
          <Guarantor guarantor={data?.data} />
        </div>
      </section>
    </div>
  );
}

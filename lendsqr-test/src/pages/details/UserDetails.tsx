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
      <section className="">
        <PersonalInfo personal={data?.data} />
        <EducationAndEmployment education={data?.data} />
        <Socials socials={data?.data} />
        <Guarantor guarantor={data?.data} />
      </section>
    </div>
  );
}

import React from "react";
import { IUserDetails } from "../../../components/interface";

export default function EducationAndEmployment({
  education,
}: {
  education: IUserDetails;
}) {
  return (
    <div>
      <p className="infoTitle">Education and Employment</p>
      <section className="detailsCard">
        <div className="level">
          <p>LEVEL OF EDUCATION</p>
          <p>{education?.education.level}</p>
        </div>
        <div className="employmentStatus">
          <p>EMPLOYMENT STATUS</p>
          <p>{education?.education.employmentStatus}</p>
        </div>
        <div className="sector">
          <p>SECTOR OF EMPLOYMENT</p>
          <p>{education?.education.sector}</p>
        </div>
        <div className="duration">
          <p>DURATION OF EMPLOYMENT</p>
          <p>{education?.education.duration}</p>
        </div>
        <div className="officeEmail">
          <p>OFFICE EMAIL</p>
          <p>{education?.education.officeEmail}</p>
        </div>
        <div className="monthlyIncome">
          <p>MONTHLY INCOM</p>
          <p>
            #{education?.education.monthlyIncome[0]} - #
            {education?.education.monthlyIncome[1]}
          </p>
        </div>
        <div className="loan">
          <p>LOAN PAYMENT</p>
          <p>{education?.education.loanRepayment}</p>
        </div>
      </section>
    </div>
  );
}

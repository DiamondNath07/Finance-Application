import React from "react";

export default function EducationAndEmployment({
  education,
}: {
  education: any;
}) {
  return (
    <div>
      <p>Education and Employment</p>
      <section className="detailsCard">
        <div className="level">
          <p>Level Of Education</p>
          <p>{education?.education.level}</p>
        </div>
        <div className="employmentStatus">
          <p>Employment Status</p>
          <p>{education?.education.employmentStatus}</p>
        </div>
        <div className="sector">
          <p>Sector of Employment</p>
          <p>{education?.education.sector}</p>
        </div>
        <div className="duration">
          <p>Duration of Employment</p>
          <p>{education?.education.duration}</p>
        </div>
        <div className="officeEmail">
          <p>Office Email</p>
          <p>{education?.education.officeEmail}</p>
        </div>
        <div className="monthlyIncome">
          <p>Monthly Income</p>
          <p>
            #{education?.education.monthlyIncome[0]} - #
            {education?.education.monthlyIncome[1]}
          </p>
        </div>
        <div className="loan">
          <p>Loan Payment</p>
          <p>{education?.education.loanRepayment}</p>
        </div>
      </section>
    </div>
  );
}

import React from "react";

export default function Guarantor({ guarantor }: { guarantor: any }) {
  return (
    <div>
      <p>Guarantor</p>
      <section className="detailsCard">
        <div className="fullName">
          <p>Full Name</p>
          <p>
            {guarantor?.guarantor.firstName} {guarantor?.guarantor.lastName}
          </p>
        </div>
        <div className="phone">
          <p>Phone Number</p>
          <p>{guarantor?.guarantor.phoneNumber}</p>
        </div>
        <div className="email">
          <p>Email Address</p>
          <p>cant find??</p>
        </div>
        <div className="relationship">
          <p>Relationship</p>
          <p>cant find??</p>
        </div>
      </section>
    </div>
  );
}

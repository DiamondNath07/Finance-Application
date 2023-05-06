import React from "react";

export default function Guarantor({ guarantor }: { guarantor: any }) {
  return (
    <div>
      <p className="infoTitle">Guarantor</p>
      <section className="detailsCard">
        <div className="fullName">
          <p>FULL NAME</p>
          <p>
            {guarantor?.guarantor.firstName} {guarantor?.guarantor.lastName}
          </p>
        </div>
        <div className="phone">
          <p>PHONE NUMBER</p>
          <p>{guarantor?.guarantor.phoneNumber}</p>
        </div>
        <div className="email">
          <p>EMAIL ADDRESS</p>
          <p>debby@gmail.com</p>
        </div>
        <div className="relationship">
          <p>RELATIONSHIP</p>
          <p>Sister</p>
        </div>
      </section>
    </div>
  );
}

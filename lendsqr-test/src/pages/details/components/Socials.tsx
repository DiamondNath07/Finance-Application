import React from "react";

export default function Socials({ socials }: { socials: any }) {
  return (
    <div>
      <p className="infoTitle">Socials</p>
      <section className="detailsCard">
        <div className="twitter">
          <p>TWITTER</p>
          <p>{socials?.socials.twitter}</p>
        </div>
        <div className="facebook">
          <p>FACEBOOK</p>
          <p>{socials?.socials.facebook}</p>
        </div>
        <div className="instagram">
          <p>INSTAGRAM</p>
          <p>{socials?.socials.instagram}</p>
        </div>
      </section>
    </div>
  );
}

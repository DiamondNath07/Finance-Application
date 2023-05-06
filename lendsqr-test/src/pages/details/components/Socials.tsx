import React from "react";

export default function Socials({ socials }: { socials: any }) {
  return (
    <div>
      <p>Socials</p>
      <section className="detailsCard">
        <div className="twitter">
          <p>Twitter</p>
          <p>{socials?.socials.twitter}</p>
        </div>
        <div className="facebook">
          <p>Facebook</p>
          <p>{socials?.socials.facebook}</p>
        </div>
        <div className="instagram">
          <p>Instagram</p>
          <p>{socials?.socials.instagram}</p>
        </div>
      </section>
    </div>
  );
}

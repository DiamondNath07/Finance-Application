import React, { Fragment } from "react";
import { MdAddHomeWork } from "react-icons/md";
import { sideNavData } from "./navData";
import logo from "../../assets/images/logo.svg";
import logoText from "../../assets/images/lendsqr.svg";
import bizcase from "../../assets/images/briefcase.png";
import arrowDown from "../../assets/images/arrowDown.png";
import homeIcon from "../../assets/images/homeIcon.png";

export default function SideNav() {
  return (
    <div>
      <header className="navheader">
        <img src={logo} alt="logo" className="logo1" />
        <img src={logoText} alt="logo" className="logo2" />
      </header>

      <main>
        <div className="businessTab">
          <img src={bizcase} alt="briefcaseIcon" />
          <p>Switch Organization</p>
          <img src={arrowDown} alt="arrowIcon" />
        </div>

        <div className="dashboardTab">
          <img src={homeIcon} alt="" />
          <p>Dashboard</p>
        </div>

        <section>
          {sideNavData.map((data) => (
            <Fragment key={data.id}>
              <div>{data.name}</div>
              {data.children.map((child) => (
                <article key={child.id} style={{ paddingLeft: "10px" }}>
                  <div>{child.item}</div>
                </article>
              ))}
            </Fragment>
          ))}
        </section>
      </main>
    </div>
  );
}

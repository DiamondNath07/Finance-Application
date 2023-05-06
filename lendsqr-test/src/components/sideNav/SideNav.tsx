import React, { Fragment } from "react";
import { sideNavData } from "./navData";
import logo from "../../assets/images/logo.svg";
import logoText from "../../assets/images/lendsqr.svg";
import bizcase from "../../assets/images/briefcase.png";
import arrowDown from "../../assets/images/arrowDown.png";
import homeIcon from "../../assets/images/homeIcon.png";

export default function SideNav() {
  return (
    <div className="mySideNav">
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
          <img src={homeIcon} alt="homeIcon" />
          <p>Dashboard</p>
        </div>

        <section className="dataTabs">
          {sideNavData.map((data) => (
            <Fragment key={data.id}>
              <div className="category">{data.name}</div>
              {data.children.map((child) => (
                <article key={child.id} >
                  <div className="detailsInCategory">
                    <div className="bar"></div>
                    <span className="bizIcons">
                      <img src={child.icon} alt="businessIcon" />
                      <p className="itemNames">
                      {child.item}
                      </p>
                    </span>
                    </div>
                </article>
              ))}
            </Fragment>
          ))}
        </section>
      </main>
    </div>
  );
}

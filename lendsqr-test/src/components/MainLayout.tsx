import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./sideNav/SideNav";
import "../pages/App.scss";

export default function MainLayout() {
  return (
    <section className="pageLayout">
      <header className="sidenav">
        <SideNav />
      </header>
      <section className="pageBody">
        <div className="header">
          <Header />
        </div>
        <div className="outlet">
          <Outlet />
        </div>
      </section>
    </section>
  );
}

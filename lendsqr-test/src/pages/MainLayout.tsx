import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/SideNav";

export default function MainLayout() {
  return (
    <section>
      <header style={{ height: "20px", backgroundColor: "red", width: "100%" }}>
        <Header />
      </header>
      <section style={{ display: "flex", height: "80vh" }}>
        <div style={{ width: "30%" }}>
          <SideNav />
        </div>
        <div style={{ width: "70%" }}>
          <Outlet />
        </div>
      </section>
    </section>
  );
}

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

export default function MainLayout() {
  return (
    <section>
      <header style={{ height: "20px", backgroundColor: "red", width: "100%" }}>
        <Header />
      </header>
      <section style={{ display: "flex", height: "100vh" }}>
        <div style={{ width: "30%", backgroundColor: "blue" }}>
          <SideNav />
        </div>
        <div style={{ width: "70%", backgroundColor: "pink" }}>
          <Outlet />
        </div>
      </section>
    </section>
  );
}

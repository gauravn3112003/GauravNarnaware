import React from "react";
import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "../components/Sidebar/Sidebar.js";
import HeaderStats from "../components/Headers/HeaderStats.js";
import FooterAdmin from "../components/Footers/FooterAdmin";
export default function Admin({ children }) {
  return (
    <>
      <div className="AdminL">
        <div className="adminLeft">
          <Sidebar />
        </div>
        <div className="adminRight">
          {/* <AdminNavbar /> */}
          <HeaderStats />
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}

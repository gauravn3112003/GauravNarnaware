import React from "react";

// components

import HeaderStats from "../../components/Headers/HeaderStats.js";

import CardLineChart from "../../components/Cards/CardLineChart.js";
import baseUrl from "../../baseUrl";
import CardBarChart from "../../components/Cards/CardBarChart.js";
import { parseCookies } from "nookies";
import CardPageBlogs from "../../components/Cards/CardPageBlogs";
import CardPageVisits from "../../components/Cards/CardPageVisits";
import CardSocialTraffic from "../../components/Cards/CardSocialTraffic.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";
// import AdminNavbar from "../../components/Navbars/AdminNavbar.js";
import Admin from "../../layouts/Admin.js";

export default function dashboard(props) {
  return (
    <>
      <Admin>
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full  xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageBlogs
              fieldName="Blogs"
              field1="Name"
              field2="Author"
              field3="Category"
              Blogs={props.getBlogs}
            />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>

        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardPageVisits
              fieldName="Feedback"
              field1="Name"
              field2="E-mail"
              field3="Subject"
              field4="Message"
              feedback={props.Connect}
            />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>
      </Admin>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // to fetch all blogs data
  const resBlogs = await fetch(baseUrl + "/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataBlogs = await resBlogs.json();

  // for get all connect us Data
  const res = await fetch(baseUrl + "/api/Connect", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();


  
  // for with login access
  const cookieuser = parseCookies(ctx);
  const user = cookieuser.User ? JSON.parse(cookieuser.User) : "";

  const roleBased = await fetch(baseUrl + "/api/User/" + user._id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const getRole = await roleBased.json();

  if (getRole.role != "root") {
    const { res } = ctx;
    res.writeHead(302, { Location: "/" });
    res.end();
  }
  return {
    props: {
      Connect: data,
      getBlogs: dataBlogs,
    },
  };
}

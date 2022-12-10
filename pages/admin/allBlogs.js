import React from "react";
import { parseCookies } from "nookies";
// components

import CardBlogTable from "../../components/Cards/CardBlogTable.js";
import baseUrl from "../../baseUrl.js";

// layout for page

import Admin from "../../layouts/Admin.js";

export default function Tables(props) {

  const DeleteBlog = (id) => {
    // console.log(id)
  };
  return (
    <>
      <Admin>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardBlogTable blogsData = {props.blogs} />
          </div>
        </div>
      </Admin>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // for show all blogs
  const res = await fetch(baseUrl + "/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  // for login authentication
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
    props: { blogs: data },
  };
}


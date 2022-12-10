import React, { useState } from "react";
import { parseCookies } from "nookies";
import "react-toastify/dist/ReactToastify.css";
import baseUrl from "../../baseUrl.js";
import Admin from "../../layouts/Admin.js";
import Editor from "../../pages/TextEditor/Editor";

const CreateBlogs = () => {
  return (
    <>
      <Admin>
        <Editor />
      </Admin>
    </>
  );
};

export async function getServerSideProps(ctx) {
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
    props: {},
  };
}
export default CreateBlogs;

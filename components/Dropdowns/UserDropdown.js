import React from "react";

import { useRouter } from "next/router";
import { createPopper } from "@popperjs/core";
import cookie from "js-cookie";

import "react-toastify/dist/ReactToastify.css";
import Profile from "../../pages/Component/Profile"
import { ToastContainer, toast } from "react-toastify";
const UserDropdown = () => {

  return (
    <>
      <Profile/>
    </>
  );
};

export default UserDropdown;

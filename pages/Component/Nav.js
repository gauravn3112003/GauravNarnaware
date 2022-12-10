import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import bcrypt from "bcryptjs";
import Avatar from "@mui/material/Avatar";
import Profile from "../Component/Profile";
import baseUrl from "../../baseUrl";
import { parseCookies } from "nookies";
import Head from "next/head";
const Nav = () => {
  const { token, Auth } = parseCookies();
  let userLogin = false;
  if (token) {
    userLogin = true;
  } else {
    userLogin = false;
  }

  const cookieuser = parseCookies();
  const user = cookieuser.User ? JSON.parse(cookieuser.User) : "";
  const router = useRouter();
  const Navigation = [
    {
      location: "/",
      Name: "Home",
      icon: "bi-house-door-fill",
    },
    {
      location: "/About",
      Name: "About",
      icon: "bi-info-circle-fill",
    },
    {
      location: "/Blogs",
      Name: "Blog",
      icon: "bi-file-earmark-post-fill",
    },
    {
      location: "/SavedBlog",
      Name: "Collection",
      icon: "bi-bookmarks-fill",
    },
    {
      location: "/ContactUs",
      Name: "Contact Us",
      icon: "bi-telephone-fill",
    },
  ];

  const [openNav, setOpenNav] = useState("fghdfhgf");
  const toggleMenuOpen = () => {
    if (openNav === "") {
      setOpenNav("open");
    } else {
      setOpenNav("");
    }
  };
  function change() {
    router.push("/Login");
  }

  const [search, setSearch] = useState({
    title: "",
  });
  function handleChange(e) {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <div className={openNav}>
        <nav className="navbar px-1">
          <div className="navbar-overlay" onClick={toggleMenuOpen}></div>
          <button
            type="button"
            className="navbar-burger"
            onClick={toggleMenuOpen}
          >
            <span className="material-icons">menu</span>
          </button>
          <h1 className="navbar-title">It's Gaurav</h1>
          <nav
            className={`${
              userLogin ? "navbar-menu mx-12 " : "navbar-menu"
            } md:items-center sm:mr-16`}
          >
            <div className="navMobileHead">IT'S GAURAV</div>

            <form
              action={`/SearchBlog`}
              className="flex w-full searchNav md:w-40  "
            >
              <input
                className="py-1 w-full bg-transparent text-white "
                type="Search"
                name="title"
                value={search.title ? search.title : ""}
                onChange={handleChange}
                placeholder="Search Blog"
              />

              <button className="">
                <i className="bi bi-search"></i>
              </button>
            </form>
            {Navigation.map((item) => {
              return (
                <Link key={item.location} href={item.location}>
                  <button onClick={toggleMenuOpen} type="button">
                    <h3
                      className={`${
                        item.location === router.asPath && "active"
                      } mt-1 sm:mt-0 sm:text-xs outline-none`}
                    >
                      <i className={`bi pr-3 ${item.icon}`}></i>
                      {item.Name}
                    </h3>
                  </button>
                </Link>
              );
            })}
            {Auth === "gvrv_n03" && (
              <Link href="/admin/dashboard">
                <button
                  onClick={toggleMenuOpen}
                  className={`${
                    "/admin/dashboard" === router.asPath && "active"
                  }  mt-1 sm:mt-0 sm:text-xs outline-none `}
                >
                  <i className="bi pr-3 bi-graph-up-arrow"></i>
                  Dashboard
                </button>
              </Link>
            )}
          </nav>
          <div className="image">
            {userLogin && (
              <div className="profile">
                <Profile />
              </div>
            )}
            {!userLogin && (
              // <button
              //   onClick={change}
              //   className="primaryBtn login  ml-0 mt-3 sm:mt-0 pyLogin w-full sm:w-auto"
              // >
              //   Login
              // </button>
              <Avatar
                onClick={change}
                className="cursor-pointer"
                src="/broken-image.jpg"
              />
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;

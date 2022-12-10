import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { parseCookies } from "nookies";
import bcrypt from "bcryptjs";

import cookie from "js-cookie";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../baseUrl";
import Head from "next/head";
const Login = () => {
  const [login, setLogin] = useState({});
  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  const submitForm = async (e) => {
    e.preventDefault();
    const { email, password } = login;
    loginUser(email, password);
  };

  const loginUser = async (email, password) => {
    const res = await fetch(baseUrl + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const res2 = await res.json();
    if (res2.error) {
      toast.error(res2.error, {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Welcome " + res2.User.userName, {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      cookie.set("token", res2.token);
      const doMatch = await bcrypt.compare("root", res2.auth)
      if (doMatch) {
        cookie.set("Auth", "gvrv_n03");
      }
      cookie.set("User", JSON.stringify(res2.User));

      router.push("/")

    }
  };
  return (
    <>
      <ToastContainer />
      <Head>
      <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Gaurav Narnaware"></meta>
          <title>Login || Gaurav Narnaware</title>
          <meta name="title" content="Login || Gaurav Narnaware" />
          <meta
            name="keywords"
            content="Gaurav Narnaware, Narnaware Gaurav, Gaurav,developedbygaurav ,Narnaware, itsgaurav,gvrv_n,gvrv,codewithgvrv, Gaurav Narnaware Website"
          />
          {/* <!-- Primary Meta Tags --> */}
          <title>Login | Gaurav Narnaware</title>
          <meta name="title" content="Login | Gaurav Narnaware" />
          <meta
            name="description"
            content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            // content="https://itsgaurav.vercel.app/Login"
            content={`${baseUrl}/Login`}

          />
          <meta property="og:title" content="Login | Gaurav Narnaware" />
          <meta
            property="og:description"
            content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
          />
          <meta property="og:image" content={`${baseUrl}/profile.webp`}/>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={`${baseUrl}/Login`}
          />
          <meta property="twitter:title" content="Login | Gaurav Narnaware" />
          <meta
            property="twitter:description"
            content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
          />
          <meta property="twitter:image" content={`${baseUrl}/profile.webp`}/>
        </Head>
      </Head>
      <section className="text-gray-600 body-font mb-24">
        <div className="container px-5 py-24 mx-auto flex flex-wrap h-screen items-center">
          <form className="lg:w-96 mx-auto md:w-96 cardPrimary rounded-lg p-8 flex flex-col w-full  md:mt-0">
            <h2 className="text-gray-900 text-lg text-center font-medium title-font mb-5">
              Login
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="Email"
                className="leading-7 text-sm text-gray-600"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                onChange={onChange}
                value={login.email ? login.email : ""}
                name="email"
                className="w-full       rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                value={login.password ? login.password : ""}
                onChange={onChange}
                id="password"
                name="password"
                className="w-full       rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={submitForm}
              className="text-white  border-0 py-2 px-8 focus:outline-none primaryBtn rounded text-lg"
            >
              Login
            </button>
            <div className="forgot pColor text-center  mt-8">
              <Link href="/">
                <a className="text-center  ">Forgot the password ?</a>
              </Link>
            </div>

            <div className="text-center">
              If you dont have an account
              <Link href="/Register">
                <a className="pColor "> Register</a>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;

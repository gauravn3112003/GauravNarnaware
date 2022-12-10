
import Nav from "../pages/Component/Nav";
import "../styles/globals.css";

import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Footer from "./Component/Footer";

import { useRouter } from "next/router.js";
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // const showHeader = router.pathname === "/admin/dashboard" ? false : true;

  const router = useRouter();
  const { asPath } = router;
  const noNav = [
    "/admin/dashboard",
    "/admin/allBlogs",
    "/admin/CreateBlogs",
    "/admin/Feedback",
  ];

  
  return (
    <>
      {noNav.includes(asPath) ? null : <Nav />}
      <Component {...pageProps} />
      {noNav.includes(asPath) ? null : <Footer />}
    </>
  );
}

export default MyApp;

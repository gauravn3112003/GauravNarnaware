import baseUrl from "../baseUrl";
import React from "react";
import Contact from "./Component/Contact";
import Head from "next/head";
import Image from "next/image";
import SingleBlog from "./Component/SingleBlog";
import Skills from "./Component/Skills";
import { Button } from "@mantine/core";
import Typewriter from "typewriter-effect";
import AboutHome from "./Component/AboutHome";
export default function Home(props) {
  const blog = props.blogs;
  const last = blog.length;
  const first = last - 3;

  // structured Schema

  const addJsonLd = () => {
    return {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Blogs",
          item: "https://developedbygaurav.vercel.app/Blogs",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://developedbygaurav.vercel.app/About",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Contact Us",
          item: "https://developedbygaurav.vercel.app/ContactUs",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Login",
          item: "https://developedbygaurav.vercel.app/Login",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Register",
          item: "https://developedbygaurav.vercel.app/Register",
        },
      ],
    };
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="google-site-verification"
          content="yTnd1BE7G88XAfK0OAdn6cfxz0c2u3_fS6t6F6Jh4nc"
        />
        <title>Gaurav Narnaware | Personal Website</title>
        <meta name="title" content="Gaurav Narnaware | Personal Website" />
        <meta
          name="description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
        />
        <meta
          name="keywords"
          content="Gaurav Narnaware, Gaurav, gvrv, gvrv_n"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Gaurav Narnaware" />

        {/* <!-- Primary Meta Tags --> */}
        <meta
          name="description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta
          property="og:title"
          content="Gaurav Narnaware | Personal Website"
        />
        <meta
          property="og:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware."
        />
        <meta property="og:image" content={`${baseUrl}/profile.webp`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={baseUrl} />
        <meta
          property="twitter:title"
          content="Gaurav Narnaware | Personal Website"
        />
        <meta
          property="twitter:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware."
        />
        <meta property="twitter:image" content={`${baseUrl}/profile.webp`} />
        <link rel="canonical" href={baseUrl} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(addJsonLd()) }}
          key="item-jsonld"
        />
      </Head>

      <section className="gradient pt-14">
        <div>
          <div className="scroll-up-btn">
            <i className="fas fa-angle-up" />
          </div>

          {/* home section start */}
          <section className="home pt-0" id="home">
            <div className="max-width">
              <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Gaurav Narnaware </div>
                <div className="text-3">
                  And I'm a{" "}
                  <span className="typing">
                    {" "}
                    <Typewriter
                      options={{
                        strings: ["Web Developer", "Software Developer"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
                <a href="#contact">Hire me</a>
              </div>
            </div>
          </section>
        </div>
      </section>
      <AboutHome />
      <Skills />
      <section className="blogB" id="blogB">
        <div className="max-width  ">
          <h2 className="title blogBefore">Blogs</h2>
          <div className=" mx-auto  py-1">
            <div className="-m-4 flex  flex-wrap-reverse">
              {blog.slice(first, last).map((item) => {
                return (
                  <SingleBlog
                    image={item.image}
                    Category={item.category}
                    Title={item.title.substring(0, 80)}
                    desc={item.description.substring(0, 100) + "..."}
                    key={item._id}
                    id={item._id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch(baseUrl + "/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!data) {
    data = null;
  }
  return {
    props: { blogs: data },
  };
}

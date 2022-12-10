import { useRouter, useState, useEffect } from "next/router";
import React from "react";
import Link from "next/link";
import { parseCookies } from "nookies";
import cookie2 from "js-cookie";
import BlogPage from "../../layouts/BlogPage";
import baseUrl from "../../baseUrl";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Image from "next/image";
import { RWebShare } from "react-web-share";
import Head from "next/head";
const Post = (props) => {
  const artical = props.blogs.artical;
  const cookie = parseCookies();
  const { token } = parseCookies();
  const titleBlog = props.blogs.title;
  const blogURL = baseUrl + "/Post/" + props.blogs._id;
  console.log(blogURL);
  const onSaved = async () => {
    if (!token) {
      router.push("/Login");
    } else {
      const res = await fetch(`${baseUrl}/api/savedBlog`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: cookie.token,
        },
        body: JSON.stringify({
          blogId: props.blogs._id,
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
      } else if (res2.remove) {
        toast.success(res2.remove, {
          position: "top-left",
          autoClose: 500,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success(res2.save, {
          position: "top-left",
          autoClose: 500,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  const router = useRouter();
  function home() {
    router.push("/");
  }
  function blogs() {
    router.push("/Blogs");
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{props.blogs.title}</title>
        <meta name="title" content={props.blogs.title} />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href={blogURL} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Gaurav Narnaware" />
        <meta name="description" content={props.blogs.description} />
        <meta name="author" content={props.blogs.author}></meta>
        <meta property="og:type" content="website" />
        <meta property="og:url" content={blogURL} />
        <meta property="og:title" content={props.blogs.title} />
        <meta property="og:description" content={props.blogs.description} />
        <meta property="og:image" content={props.blogs.image} />
        <meta name="keywords" content={props.blogs.category} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={blogURL} />
        <meta property="twitter:title" content={props.blogs.title} />
        <meta
          property="twitter:description"
          content={props.blogs.description}
        />
        <meta property="twitter:image" content={props.blogs.image} />
      </Head>

      <BlogPage>
        <section className="body-font pt-0 text-gray-600">
          <div className="container pt-0 mx-auto ">
            <div>
              <div className="screenHeight container py-6 md:py-10">
                <div className="mx-auto ">
                  <div>
                    <span
                      onClick={home}
                      className="primaryColor cursor-pointer"
                    >
                      Home /{" "}
                    </span>
                    <span onClick={blogs} className=" cursor-pointer">
                      {" "}
                      blogs /{" "}
                    </span>{" "}
                    <span> {props.blogs.title}</span>
                  </div>

                  <div className=" ">
                    <h1 className="blogTitle mt-3">{props.blogs.title}</h1>
                    <div className="flex items-center pt-5 md:pt-10">
                      <div className="blogimg border">
                        <Image
                          src="/profile.webp"
                          alt="Picture of the author"
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className="pl-5 author">
                        <div className="authorBlog">
                          <span>by {props.blogs.author}</span>
                          <span>Last Updated : {props.blogs.date}</span>
                        </div>

                        <div className="blogRight">
                          <i
                            className={`bi bi-bookmark cursor-pointer mr-3 font-bold `}
                            onClick={onSaved}
                          ></i>

                          <RWebShare
                            data={{
                              text: props.blogs.description,
                              url: blogURL,
                              title: props.blogs.title,
                            }}
                          >
                            <i className="bi bi-share icos text-black cursor-pointer"></i>
                          </RWebShare>
                        </div>
                      </div>
                    </div>
                    <div className=" horizonatal"></div>
                  </div>
                  <div className="  prose max-w-none pt-8">
                    <div>
                      <img
                        src={props.blogs.image}
                        className="blogImage"
                        alt={props.blogs.image}
                      />
                    </div>
                    <div
                      className="overflow-scroll "
                      dangerouslySetInnerHTML={{ __html: artical }}
                    />
                    <div className="font-bold">
                      Tags : <span className="primaryColor " >{props.blogs.category}</span>{" "}
                    </div>
                    <div className="border-lila flex flex-col items-center border-t py-12 pt-12 md:flex-row md:items-start xl:pb-20">
                      <div className="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
                        <img
                          src="/profile.webp"
                          className="rounded-ful"
                          alt="author image"
                        />
                      </div>
                      <div className="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
                        <h3 className="font-body text-secondary pt-10 text-2xl font-bold md:pt-0">
                          Gaurav Narnaware
                        </h3>
                        <p className="font-body text-secondary pt-5 text-lg leading-8 sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <script src="/assets/js/main.js " async />
          </div>
        </section>
      </BlogPage>
    </>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(baseUrl + "/api/post/" + id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return {
    props: { blogs: data },
  };
}
export default Post;

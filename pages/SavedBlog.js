import React from "react";
import BlogPage from "../layouts/BlogPage";
import Head from "next/head";
import baseUrl from "../baseUrl";
import { parseCookies } from "nookies";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SavedBlog = ({ Blogs }) => {
  const { token } = parseCookies();
  const router = useRouter();

  function Home() {
    router.push("/");
  }
  const [sBlogs, setSBlogs] = useState(Blogs);

  const removeBlog = async (pid) => {
    const res = await fetch(`${baseUrl}/api/savedBlog`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        blogId: pid,
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
      toast.success(res2.remove, {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setSBlogs(res2.blogs);
  };
  const SingleSave = (props) => {
    return (
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="author" content="Gaurav Narnaware"></meta>
          <title>Collection || Gaurav Narnaware</title>
          <meta name="title" content="Collection || Gaurav Narnaware" />
          <meta
            name="keywords"
            content="Gaurav Narnaware, Narnaware Gaurav, Gaurav,developedbygaurav ,Narnaware, itsgaurav,gvrv_n,gvrv,codewithgvrv, Gaurav Narnaware Website"
          />
          {/* <!-- Primary Meta Tags --> */}
          <title>Collection | Gaurav Narnaware</title>
          <meta name="title" content="Collection | Gaurav Narnaware" />
          <meta
            name="description"
            content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            // content="https://itsgaurav.vercel.app/SavedBlog"
            content={`${baseUrl}/SavedBlog`}

          />
          <meta property="og:title" content="Collection | Gaurav Narnaware" />
          <meta
            property="og:description"
            content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
          />
          <meta property="og:image" content={`${baseUrl}/profile.webp`} />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={`${baseUrl}/SavedBlog`}
          />
          <meta property="twitter:title" content="Collection | Gaurav Narnaware" />
          <meta
            property="twitter:description"
            content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
          />
          <meta property="twitter:image" content={`${baseUrl}/profile.webp`} />
        </Head>
        <div className="p-4  md:w-1/3">
          <div className="w-25 h-full overflow-hidden rounded-lg  border-opacity-60">
            <img
              className="w-full object-cover object-center md:h-36 lg:h-48"
              src={props.image}
              alt="blog"
            />
            <div className="p-6 h-full cardPrimary">
              <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
                {props.Category}
              </h2>
              <h1 className="title-font mb-3   text-justify text-sm font-medium text-gray-900">
                {props.Title}
              </h1>
              <p className="mb-3 text-justify  leading-relaxed">{props.desc}</p>
              <div className="flex flex-wrap items-center ">
                <Link
                  href={{
                    pathname: `/Post/[id]`,
                    query: {
                      title: props.Title,
                      id: props.id,
                    },
                  }}
                >
                  <a className="primaryColor inline-flex items-center md:mb-2 lg:mb-0">
                    Learn More
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </Link>
                <span className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-200 py-1 pr-3 text-sm leading-none text-gray-400 md:ml-0 lg:ml-auto">
                  <i
                    onClick={() => {
                      removeBlog(props.id);
                    }}
                    className="bi text-red-700 cursor-pointer bi-trash3-fill"
                  ></i>
                </span>
                <span className="inline-flex items-center text-sm leading-none text-gray-400"></span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <BlogPage>
        <section className="body-font text-gray-600 py-0" >
          <div className="container mx-auto overflow-y-auto overflow-x-hidden h-screen">
            <div className="pb-6">
              <span onClick={Home} className="primaryColor cursor-pointer">
                Home /{" "}
              </span>
              <span className=" cursor-pointer">Saved Blogs</span>
            </div>
            {!token ? (
              <>
                <h3 className="text-center">
                  please login to view your Saved Blog,
                  <div>
                    <Link href="/Login">
                      <a className="primaryColor font-bold "> Login Now</a>
                    </Link>
                  </div>
                </h3>
              </>
            ) : (
              <>
                {" "}
                <div className="-m-4 flex flex-wrap">
                  {sBlogs.length === 0 ? (
                    <>
                      <div className="m-auto pt-5">No Blog Found </div>
                    </>
                  ) : (
                    sBlogs.map((item, index) => {
                      return (
                        <>
                          <SingleSave
                            key={index}
                            image={item.blog.image}
                            Category={item.blog.category}
                            Title={item.blog.title.substring(0, 80)}
                            desc={
                              item.blog.description.substring(0, 100) + "..."
                            }
                            id={item.blog._id}
                          />
                        </>
                      );
                    })
                  )}
                </div>
              </>
            )}
          </div>
        </section>
      </BlogPage>
    </>
  );
};
export async function getServerSideProps(ctx) {
  const { token } = parseCookies(ctx);
  if (!token) {
    return {
      props: { Blogs: [] },
    };
  }
  const res = await fetch(`${baseUrl}/api/savedBlog`, {
    headers: {
      Authorization: token,
    },
  });
  const Blogs = await res.json();
  if (Blogs.error) {
    return {
      props: { error: Blogs.error },
    };
  }

  return {
    props: { Blogs },
  };
}
export default SavedBlog;

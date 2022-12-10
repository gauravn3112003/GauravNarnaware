import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import SingleBlog from "./Component/SingleBlog";
import baseUrl from "../baseUrl";
import BlogPage from "../layouts/BlogPage";
import Pagination from "./Component/Pagination";
import Head from "next/head";
const Blogs = (props) => {
  const [showPerPage, setShowPerPage] = useState(6);
  const [pagination, setPagination] = useState({
    start: props.blogs.length + 1,
    end: props.blogs.length - showPerPage,
  });
  console.log("Start : " + pagination.start + "   End :" + pagination.end);
  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const router = useRouter();
  function Home() {
    router.push("/");
  }

  const addJsonLd = () => {
    return {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      name: "Blogs | Gaurav  Narnaware",
      url: "https://developedbygaurav.vercel.app/Blogs",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://developedbygaurav.vercel.app/SearchBlog?title={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    };
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Gaurav Narnaware"></meta>
        <title>Blogs | Gaurav Narnaware</title>
        <meta name="title" content="Blogs | Gaurav Narnaware" />
        <meta
          name="keywords"
          content="Gaurav Narnaware, Narnaware Gaurav, Gaurav,developedbygaurav ,Narnaware, itsgaurav,gvrv_n,gvrv,codewithgvrv, Gaurav Narnaware Website"
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>Blogs | Gaurav Narnaware</title>
        <meta name="title" content="Blogs | Gaurav Narnaware" />
        <meta
          name="description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${baseUrl}/Blogs`} />
        <meta property="og:title" content="Blogs | Gaurav Narnaware" />
        <meta
          property="og:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
        />
        <meta property="og:image" content={`${baseUrl}/profile.webp`} />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`${baseUrl}/Blogs`} />
        <meta property="twitter:title" content="Blogs | Gaurav Narnaware" />
        <meta
          property="twitter:description"
          content="I'm a creator, software developer, and web designer by name Gaurav Narnaware.."
        />
        <meta property="twitter:image" content={`${baseUrl}/profile.webp`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(addJsonLd()) }}
          key="item-jsonld"
        />
      </Head>
      <BlogPage getBlog={props.blogs}>
        <section className="body-font text-gray-600 py-0">
          <div className="container mx-auto    ">
            <div className="pb-6">
              <span onClick={Home} className="primaryColor cursor-pointer">
                Home /{" "}
              </span>
              <span className=" cursor-pointer"> Blogs</span>
            </div>
            <div className="-m-4 flex flex-wrap-reverse">
              {props.blogs
                .slice(pagination.end, pagination.start)
                .map((item, index) => {
                  return (
                    <SingleBlog
                      key={index}
                      image={item.image}
                      Category={item.category}
                      Title={item.title.substring(0, 80)}
                      desc={item.description.substring(0, 100) + "..."}
                      id={item._id}
                    />
                  );
                })}
            </div>
            <Pagination
              showPerPage={showPerPage}
              onPaginationChange={onPaginationChange}
              total={props.blogs.length}
            />
          </div>
        </section>
      </BlogPage>
    </>
  );
};

export async function getServerSideProps(context) {
  // for show all blogs
  const res = await fetch(baseUrl + "/api/blogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  // for count all blogs
  const countBlogs = await fetch(baseUrl + "/api/countAllBlogs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const countData = await countBlogs.json();
  const count = countData;

  return {
    props: { blogs: data, counts: count },
  };
}

export default Blogs;

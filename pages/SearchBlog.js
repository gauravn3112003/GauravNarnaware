import React, { useState } from "react";
import { useRouter } from "next/router";
// import baseUrl from "../../baseUrl";
import baseUrl from "../baseUrl";
import SingleBlog from "./Component/SingleBlog";
let Flag = 0;
const SearchBlog = (props) => {
  const router = useRouter();

  const search = router.query.title;
  function Home() {
    router.push("/");
  }
  const searchBlogs = search;
  return (
    <>
      <section className="body-font text-gray-600">
        <div className="container h-screen mx-auto px-5 ">
          <div className="pb-6">
            <span onClick={Home} className="primaryColor cursor-pointer">
              Home /{" "}
            </span>
            <span className=" cursor-pointer"> {search} </span>
          </div>

          <div className="-m-4 flex flex-wrap">
            {props.blogs
              .filter((val) => {
                if (searchBlogs === "") {
                  return val;
                } else if (
                  val.title
                    .toString()
                    .toLowerCase()
                    .includes(searchBlogs.toString().toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item) => {
                Flag = 1;
                return (
                  <>
                    <SingleBlog
                      image={item.image}
                      Category={item.category}
                      Title={item.title.substring(0, 80)}
                      desc={item.description.substring(0, 200) + "..."}
                      key={item._id}
                      id={item._id}
                    />
                  </>
                );
              })}
          </div>
          {Flag == 0 ? (
            <>
              <div className="my-2 font-bold text-center">No results found</div>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
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

  return {
    props: { blogs: data },
  };
}
export default SearchBlog;

import React, { useState, useEffect } from "react";

// components
import Link from "next/link.js";
import baseUrl from "../baseUrl.js";
export default function BlogPage({ children }) {
  const [blog, setBlogs] = useState([]);
  const getBlogs = async () => {
    const res = await fetch(baseUrl + "/api/blogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setBlogs(data);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const last = blog.length;
  const first = last - 3;
  return (
    <>
      <div className="blogPage max-width ">
        <div className="blogPageLeft ">{children}</div>
        <div className="blogPageRight">
          <div className="popPost cardPrimary">
            <div className="title">Popular Post</div>
            <div className="popContain">
              {blog.slice(first, last).map((blogs, index) => {
                return (
                  <>
                    <div className="popBlogs " key={index}>
                      <div className="popNo">0{index + 1}</div>
                      <div className="popTitle">
                        <Link href={"/Post/" + blogs._id}>
                          <a>{blogs.title}</a>
                        </Link>
                        <div className="popCategory"> {blogs.category} </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Link from "next/dist/client/link";
const SingleBlog = (props) => {
  return (
    <>
      

      <div className="p-4  md:w-1/3">
        <div className="w-25 h-full overflow-hidden rounded-lg  border-opacity-60">
          <img
            className="w-full scaleTrans object-cover object-center md:h-36 lg:h-48"
            src={props.image}
            alt={props.Title}
          />
          <div className="p-6 h-full cardPrimary">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-400">
              {props.Category}
            </h2>
            <h3 className="title-font mb-3   text-justify text-sm font-medium text-gray-900">
              {props.Title}
            </h3>
            <p className="mb-3 text-justify  leading-relaxed">{props.desc}</p>
            <div className="flex flex-wrap items-center ">
              <Link
                href={{
                  pathname: `/Post/[id]`,
                  query: {
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
                <svg
                  className="mr-1 h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                1.2K
              </span>
              <span className="inline-flex items-center text-sm leading-none text-gray-400">
                <svg
                  className="mr-1 h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;

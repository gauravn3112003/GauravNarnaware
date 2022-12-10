import React, { useState, useEffect } from "react";
import { parseCookies } from "nookies";
import baseUrl from "../../baseUrl";
import Admin from "../../layouts/Admin";
import CardFeedbackTable from "../../components/Cards/CardFeedbackTable"
const AllBlogs = (props) => {
  // console.log(props.Feedback);

  const Deletefeedback = (id) => {
    // console.log(id)
  };

  return (
    <>
     <Admin>
        <div className="flex flex-wrap mt-4">
          <div className="w-full mb-12 px-4">
            <CardFeedbackTable FeedData = {props.Feedback}/>
          </div>
        </div>
      </Admin>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(baseUrl + "/api/Connect", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return {
    props: { Feedback: data },
  };
}

export default AllBlogs;

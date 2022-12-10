import React,{useState,useEffect} from "react";
import baseUrl from "../../baseUrl";
// components

import CardStats from "../../components/Cards/CardStats"

export default function HeaderStats() {


  // to fetch blogs 
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



    // to fetch Users 
    const [user, setUser] = useState([]);
    const getUsers = async () => {
      const res = await fetch(baseUrl + "/api/signUp", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUser(data);
    };
  
    useEffect(() => {
      getBlogs();
      getUsers();
    }, []);
  
    // to fetch Contacts 
    const [contact, setContact] = useState([]);
    const getContact = async () => {
      const res = await fetch(baseUrl + "/api/Connect", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setContact(data);
    };
  
    useEffect(() => {
      getBlogs();
      getUsers();
      getContact();
    }, []);
  
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className=" mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="USERS"
                  statTitle={user.length}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="BLOGS"
                  statTitle={blog.length}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="CONTACTS"
                  statTitle={contact.length}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full  lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="EMAIL'S"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

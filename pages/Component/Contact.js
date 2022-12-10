import React from "react";
import { useState, useMemo } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import baseUrl from "../../baseUrl";

const Contact = () => {
  const [connect, setConnect] = useState({});
  const onChange = (e) => {
    setConnect({
      ...connect,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = connect;
    addConnect(name, email, subject, message);
  };

  const addConnect = async (name, email, subject, message) => {
    const res = await fetch(baseUrl + "/api/Connect", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    const data = await res.json();
    if (res.error) {
      toast.error(res.error, {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success("Thanks For feedback !", {
        position: "top-left",
        autoClose: 500,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos harum corporis fuga corrupti. Doloribus quis soluta
                nesciunt veritatis vitae nobis?
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user" />
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Gaurav Narnaware</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt" />
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Maharashtra, India</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope" />
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">
                      garavnarnaware3112003@gmail.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form onSubmit={submitForm}>
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      placeholder="Name"
                      onChange={onChange}
                      value={connect.name ? connect.name : ""}
                      id="name"
                      name="name"
                      required={true}
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      placeholder="Email"
                      onChange={onChange}
                      value={connect.email ? connect.email : ""}
                      id="email"
                      required={true}
                      name="email"
                    />
                  </div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Subject"
                    onChange={onChange}
                    value={connect.subject ? connect.subject : ""}
                    id="subject"
                    required={true}
                    name="subject"
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Message.."
                    onChange={onChange}
                    value={connect.message ? connect.message : ""}
                    id="message"
                    name="message"
                    required={true}
                    defaultValue={""}
                  />
                </div>
                <div className="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

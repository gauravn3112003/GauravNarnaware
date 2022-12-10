import React from "react";
import Link from "next/link"
export default function ErrorPage() {
  return (
    <>
      <div className="error">
        {/* <div className="code">
                    404
                </div> */}
        <div className="message">Page Not Found</div>
        <div className="error-code">
          {/* <img src="https://image.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg" alt="" srcSet="" /> */}
        </div>
        <div className="message-second">Out of nothing, something.</div>
        <div className="message-long">
          You can find (just about) anything on developedbygaurav  — apparently
          even a page that doesn’t exist. Maybe these stories about finding what
          you didn’t know you were looking for will take you somewhere new?
        </div>
        <div className="error-btn primaryBtn">
          <Link href="/">
            <a>Back Home</a>
          </Link>
        </div>
      </div>
    </>
  );
}

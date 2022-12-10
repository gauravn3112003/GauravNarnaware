import React, { useState, useEffect } from "react";

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  const [start, setStart] = useState(total)
  const [end, setEnd] = useState(total - showPerPage)
  useEffect(() => {
    // console.log("Start : " + start + " End : " + end);
    const value = showPerPage * counter;
    onPaginationChange(start, end);
  }, [counter]);



  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
        setStart(start + showPerPage)
        setEnd(end + showPerPage)
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === start) {
        setCounter(counter);
        setStart(start)
        setEnd(end)
      } else {
        setCounter(counter + 1);
        setStart(start - showPerPage)
        setEnd(end - showPerPage)
      }
    }
  };
  return (
    <div className="pagination mt-3 ">
      <button className="primaryBtn" onClick={() => onButtonClick("prev")}>
        Previous
      </button>
      <button className="primaryBtn" onClick={() => onButtonClick("next")}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
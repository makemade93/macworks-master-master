/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components

function ErrorPage(props) {
  // state
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade("end_transition");
  }, []);

  return (
    <div className="mobile-block-bg">
      <h1
        className="mobile-block-font"
        style={{ fontSize: "20px", opacity: "0.3" }}
      >
        Sorry, the page you are looking for cannot be found. It may have been
        moved, deleted or the URL may have been typed incorrectly.
        <br />
        Please return to the homepage and try again or contact us if you need
        further assistance.
      </h1>
    </div>
  );
}

export default ErrorPage;

/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components

function MobileBlock(props) {
  // state
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade("end_transition");
  }, []);

  return (
    <div className="mobile-block-bg">
      <div className="mobile-block-img"></div>
      <h1 className="mobile-block-font">
        I apologize, but the mobile version of my website is currently under
        development. To fully access all features of my website, we recommend
        accessing it from a PC browser. Thank you for your understanding and
        please check back soon for my updated mobile site.
      </h1>
    </div>
  );
}

export default MobileBlock;

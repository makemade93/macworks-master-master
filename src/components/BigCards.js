/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// img

function BigCards() {
  // state
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade("end_transition");
  }, []);

  let navigate = useNavigate();
  return (
    <div
      className={`big-card start_transition ${fade}`}
      onClick={() => {
        navigate("/designsystem");
      }}
    >
      <div className="thumbnail big-card_thumbnail"></div>
      <div className="text-wrapper">
        <h3>Samsung Developer Design System</h3>
        <div>
          <p>Design System</p>
          <div className="tag">UX/UI</div>
        </div>
      </div>
    </div>
  );
}

export default BigCards;

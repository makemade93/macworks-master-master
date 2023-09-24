/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";
// style
import styles from "../styles/components/SmallCards.css";

function SmallCardsBehance(props) {
  // state
  let url = props.thumbnail[2];
  let [mouseHover, setMouseHover] = useState(false);
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade(`end_transition_` + props.thumbnail[6]);
  }, []);

  return (
    <div
      className={`small-card start_transition ${fade}`}
      onMouseOver={() => {
        setMouseHover(true);
      }}
      onMouseLeave={() => {
        setMouseHover(false);
      }}
      onClick={() => {
        window.open(url);
      }}
    >
      <div
        className={`thumbnail  ${props.thumbnail[0]} ${
          mouseHover ? props.thumbnail[0] + `_gif` : null
        }`}
      >
        {mouseHover ? <Behance mouseHover={mouseHover} /> : null}
      </div>
      <div className="text-wrapper">
        <h3>{props.thumbnail[1]}</h3>
        <div className="tag-wrapper">
          <div className="years-tag">{props.thumbnail[3]}</div>
          <div className={`${props.thumbnail[5]}`}>{props.thumbnail[4]}</div>
        </div>
      </div>
    </div>
  );
}

function Behance(props) {
  return (
    <div className="behance-badge">
      Watch on Behance <img src={`${process.env.PUBLIC_URL}/arr.svg`} />
    </div>
  );
}

export default SmallCardsBehance;

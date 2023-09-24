/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// style
import styles from "../styles/components/SmallCards.css";

function SmallCards(props) {
  // state
  let navigate = useNavigate();
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
        navigate(props.thumbnail[2]);
      }}
    >
      <div
        className={`thumbnail  ${props.thumbnail[0]} ${
          mouseHover ? props.thumbnail[0] + `_gif` : null
        }`}
      ></div>
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

export default SmallCards;

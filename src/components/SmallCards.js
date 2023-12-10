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
  let [mouseHover, setMouseHover] = useState(true);
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade(`end_transition_` + props.thumbnail[6]);
  }, []);

  // useEffect를 통해서 시작하자마자 gif 전체 불러오게 했음.
  useEffect(() => {
    // 0.1초 후에 state를 변경
    const timer = setTimeout(() => {
      setMouseHover(false);
    }, 100); // 0.1초 = 100밀리초

    // 컴포넌트가 언마운트될 때 타이머를 정리
    return () => clearTimeout(timer);
  }, []); // 빈 의존성 배열을 사용하여 컴포넌트 마운트 시에만 실행

  // ["thumbnail_11", "Camly", "Camly", "23", "UX/UI", "UX-tag", "row1"],
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

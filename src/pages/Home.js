/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components
import Navbar from "../components/Navbar";
import BigCards from "../components/BigCards";
import SmallCards from "../components/SmallCards";
import SmallCardsBehance from "../components/SmallCardsBehance";

function Home(props) {
  //state
  //표기순서:이미지이름,프로젝트명,URL,년도태그,장르태그,그리드ROW
  let [thumbnail, changeThumbnail] = useState([
    ["thumbnail_01", "SDC22", "sdc22", "22", "UX/UI", "UX-tag", "row1"],
    [
      "thumbnail_02",
      "Burning Day",
      "https://www.behance.net/gallery/81833183/bunrning-day",
      "19",
      "UX/UI",
      "UX-tag",
      "row1",
    ],
    [
      "thumbnail_03",
      "Shadowing",
      "https://www.behance.net/gallery/74173835/Shadowing",
      "18",
      "UX/UI",
      "UX-tag",
      "row1",
    ],
    ["thumbnail_04", "Time Bank", "timebank", "19", "UX/UI", "UX-tag", "row2"],
    [
      "thumbnail_05",
      "Signal Live",
      "signal-live",
      "20",
      "UX/UI",
      "UX-tag",
      "row2",
    ],
    [
      "thumbnail_06",
      "Jelly Monster",
      "jelly-monster",
      "17",
      "UX/UI",
      "UX-tag",
      "row3",
    ],
    [
      "thumbnail_07",
      "Sanute",
      "https://www.behance.net/gallery/90328383/SANUTE-Branding%282019%29",
      "19",
      "Brand",
      "BX-tag",
      "row3",
    ],
    [
      "thumbnail_08",
      "After House",
      "https://www.behance.net/gallery/74192515/after-house-branding",
      "18",
      "Brand",
      "BX-tag",
      "row3",
    ],
    [
      "thumbnail_09",
      "Motions",
      "motions",
      "17-22",
      "Motion",
      "motion-tag",
      "row2",
    ],
    ["thumbnail_10", "SDC23", "SDC23", "23", "UX/UI", "UX-tag", "row2"],
  ]);

  return (
    <div className="container-wrapper">
      <div className="container">
        <BigCards />
        <SmallCards thumbnail={thumbnail[9]} />
        <SmallCards thumbnail={thumbnail[0]} />
        <SmallCardsBehance thumbnail={thumbnail[1]} />
        <SmallCardsBehance thumbnail={thumbnail[2]} />
        <SmallCards thumbnail={thumbnail[3]} />
        <SmallCards thumbnail={thumbnail[4]} />
        <SmallCards thumbnail={thumbnail[8]} />
        <SmallCardsBehance thumbnail={thumbnail[6]} />
        <SmallCardsBehance thumbnail={thumbnail[7]} />
        <SmallCards thumbnail={thumbnail[5]} />
      </div>
    </div>
  );
}

export default Home;

/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components
function Camly(props) {
  // state
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade("end_transition");
  }, []);

  return (
    <div className={`start_transition ${fade}`}>
      <div className="container-wrapper" style={{ backgroundColor: "#101111" }}>
        {/* project headder */}

        {/* project info card */}
        <div
          className="project-info"
          style={{
            backgroundColor: "#161717",
            marginTop: "100px",
            marginBottom: "0px",
          }}
        >
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Project info
            <p>Personal Project</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Credit
            <p>605 LABS</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            My Role
            <p>UX/UI Design</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2023</p>
          </p>
        </div>

        {/* 1번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_1"></div>
        </div>
        {/* 2번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_2"></div>
        </div>
        {/* 3번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_3"></div>
        </div>
        {/* 4번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_4"></div>
        </div>
        {/* 5번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_5"></div>
        </div>
        {/* 6번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_6"></div>
        </div>
        {/* 7번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_7"></div>
        </div>
        {/* 8번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_8"></div>
        </div>
        {/* 9번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_9"></div>
        </div>
        {/* 10번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_10"></div>
        </div>
        {/* 11번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_11"></div>
        </div>
        {/* 12번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_12"></div>
        </div>
        {/* 13번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_13"></div>
        </div>
        {/* 14번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_14"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_15"></div>
        </div>
        {/* 16번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_16"></div>
        </div>
        {/* 17번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="Camly-img_17"></div>
        </div>
        <div className="Camly-margin_spc100"></div>
      </div>
    </div>
  );
}

export default Camly;

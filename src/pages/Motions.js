/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components

function Motions(props) {
  // state
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade("end_transition");
  }, []);

  return (
    <div className={`start_transition ${fade}`}>
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        {/* project headder */}
        <div className="project-desc" style={{ marginTop: "100px" }}>
          <h1 style={{ gridColumn: "1/3" }}>Motions</h1>
          <p style={{ gridColumn: "1/3" }}>
            UX/UI 디자인에서도 중요한 요소인 인터렉션에 대한 깊은 이해와 경험을
            갖습니다. 사용자의 경험을 최적화하기 위한 접근성과 유용성을 고려하여
            디자인하며, 이를 통해 높은 사용성과 경험을 제공할 수 있습니다. 이
            프로젝트에서는 앱의 메인 화면 디자인, 사용자의 접근성을 높이는
            인터렉션 디자인 등 확인하실 수 있습니다.
          </p>
          <p style={{ gridColumn: "3/5" }}>
            저의 목표는 Motion과 Interaction을 활용하여 높은 완성도와 매력적인
            UX/UI를 제공하는 것입니다. 저의 스타일과 경험을 활용한 디자인이
            사용자의 경험을 더욱 향상시키며, 프로젝트에 도움이 되는 것을
            기대합니다.
          </p>
        </div>

        {/* project info card */}
        <div className="project-info" style={{ backgroundColor: "#161717" }}>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Project info
            <p>Motion Project Collection</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Credit
            <p>Naver, Samsung andProject leaders</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            My Role
            <p>Interaction, Motion graphics</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2017 - 2022</p>
          </p>
        </div>
      </div>

      {/* 1번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", marginBottom: "100px" }}
        >
          <div className="Motions-img_1" style={{ gridColumn: "1/5" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            NAVER Maps Splash Screen
            <br />
            credit : NAVER, NAVER Labs BX Team
          </p>
        </div>
      </div>

      {/* 2번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", marginBottom: "100px" }}
        >
          <div className="Motions-img_2" style={{ gridColumn: "1/5" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            NAVER Labs Logo Animation
            <br />
            credit : NAVER Labs BX Team
          </p>
        </div>
      </div>

      {/* 3번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", marginBottom: "100px" }}
        >
          <div className="Motions-img_3" style={{ gridColumn: "1/5" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            AWAY Splash Animation
            <br />
            credit : NAVER Labs BX Team
          </p>
        </div>
      </div>

      {/* 4번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", marginBottom: "100px" }}
        >
          <div className="Motions-img_4" style={{ gridColumn: "1/3" }}></div>
          <div className="Motions-img_5" style={{ gridColumn: "3/5" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            Block Interaction
            <br />
            Credit : Jinwoong Seo
          </p>
        </div>
      </div>

      {/* 5번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{
            border: "none",
            marginBottom: "100px",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <div className="Motions-img_6" style={{ gridColumn: "1/2" }}></div>
          <div className="Motions-img_7" style={{ gridColumn: "2/4" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            Logo, Character Motion
          </p>
        </div>
      </div>

      {/* 6번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{
            border: "none",
            marginBottom: "100px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="Motions-img_8" style={{ gridColumn: "1/4" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            Sanute Brand Motion
            <br />
            Credit : Team Sanute
          </p>
        </div>
      </div>

      {/* 7번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{
            border: "none",
            marginBottom: "100px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="Motions-img_9" style={{ gridColumn: "1/2" }}></div>
          <div className="Motions-img_10" style={{ gridColumn: "2/4" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            Sanute Brand Motion
            <br />
            Credit : Team Sanute
          </p>
        </div>
      </div>

      {/* 8번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{
            border: "none",
            marginBottom: "100px",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="Motions-img_11" style={{ gridColumn: "1/4" }}></div>
          <p
            style={{
              color: "white",
              textAlign: "center",
              gridColumn: "1/5",
              marginTop: "20px",
              opacity: "0.8",
              lineHeight: "22px",
            }}
          >
            Samsung Designers
            <br />
            Credit : Samsung Electronics
          </p>
        </div>
      </div>
    </div>
  );
}

export default Motions;

/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components

function Jelly(props) {
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
        <div className="project-img jelly-img_title"></div>
        <div className="project-desc" style={{ marginTop: "40px" }}>
          <h1>Jelly Monster</h1>
          <p style={{ gridColumn: "1/3" }}>
            "Jelly Monster"는 게임적인 경험을 제공하는 스마트 워치용 헬스 케어
            앱입니다. 원형 인터페이스인 Galaxy Watch를 기반으로 고안된 개인 컨셉
            프로젝트입니다. 기존 헬스 서비스에서는 운동 기록을 제공하기만
            합니다.
          </p>
          <p style={{ gridColumn: "3/5" }}>
            하지만 Jelly Monster에서는 게임 요소를 결합하여 운동을 통해 캐릭터를
            키우거나 친구들과 경쟁할 수 있습니다. 운동을 꾸준히 진행하지 않으면
            캐릭터에서 메시지를 전달받으실 수 있으며, 즐거운 헬스 경험을 제공할
            것입니다.
          </p>
        </div>

        {/* project info card */}
        <div className="project-info" style={{ backgroundColor: "#161717" }}>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Project info
            <p>Concept, Personal Project</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Project Device
            <p>Galaxy Watch</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            My Role
            <p>Product Design, UI Design</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2017</p>
          </p>
        </div>
      </div>

      {/* 1번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "white" }}>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="jelly-img_2"></div>
          <div className="jelly-img_3"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h1 style={{ gridColumn: "1/2", color: "black", opacity: "1" }}>
            Project Concepts
          </h1>
          <p style={{ gridColumn: "2/6", color: "black", opacity: "1" }}>
            "Jelly Monster"는 운동을 꾸준히 하는 것이 매우 어려운 이유를
            극복하기 위한 새로운 선택지를 제공합니다. 운동은 육체적으로
            어렵지만, 그보다 심리적 동기부여에서 더 어렵다는 것을 알고 있습니다.
            비싼 전문 트레이닝, 운동 기록하기 등 다양한 방법으로 동기부여를 하는
            사람들에게 "Jelly Monster"는 게이밍 핼스케어라는 새로운 경험을
            제공합니다. 스마트워치의 여러 센서를 통해, 운동에 맞는 화면과 기능이
            자동으로 나타나고, 사용자의 운동 데이터를 통해 사용자 캐릭터가 함께
            성장하는 경험을 제공합니다.
          </p>
        </div>
      </div>

      {/* 2번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid">
          <div className="jelly-img_4"></div>
        </div>
        <div
          className="project-container"
          style={{
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
            margin: "20px 0 80px 0",
          }}
        >
          <h1 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Exercise
          </h1>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            "Exercise"는 사용자의 운동을 지원하는 프로그램입니다. 사용자는
            캐릭터를 생성하여 진행하는 운동에 맞춰 함께 운동할 수 있습니다.
            또한, 심박수와 운동량 등의 정량적인 데이터와 히든 미션을 통해
            트로피를 수집하세요. 주변에 "Jelly Monster"를 사용하는 사용자가
            있다면 화면에 함께 표시되어 커뮤니케이션이 가능하고, 등록된
            친구들과도 함께 운동할 수 있습니다. 스마트 워치의 기울기센서,
            동작센서, GPS 등을 사용하여 달리기, 등산, 벤치프레스 등 다양한
            운동에 맞는 기능을 제공합니다.
          </p>
        </div>
      </div>

      {/* 4번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid">
          <div className="jelly-img_5"></div>
        </div>
        <div
          className="project-container"
          style={{
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
            margin: "20px 0 80px 0",
          }}
        >
          <h1 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Together
          </h1>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            "Jelly Monster"는 사용자의 운동 경험을 강화하는 게임입니다. 혼자서도
            사용 가능하지만, 다른 유저와 함께 사용할 수도 있습니다. "Jelly
            Planet"은 사용자의 운동 상태를 나타내는 행성계를 만들어줍니다.
            커뮤니케이션 기능을 통해 함께 운동하는 경험을 제공하고, 사용자의
            운동 경험을 즐길 수 있도록 도와줍니다.
          </p>
        </div>
      </div>

      {/* 5번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid">
          <div className="jelly-img_6"></div>
          <div
            className="jelly-img_7"
            style={{ borderTop: "1px solid #E5E5E5" }}
          ></div>
        </div>
        <div
          className="project-container"
          style={{
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
            margin: "20px 0 80px 0",
          }}
        >
          <h1 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Motivation
          </h1>
          <p
            style={{
              gridColumn: "2/6",
              color: "white",
              opacity: "1",
            }}
          >
            "Jelly Monster"를 통해 운동에 대한 동기부여를 얻을 수 있습니다.
            운동을 통해 달성하는 목표를 통해 트로피를 수집할 수 있습니다.
            캐릭터들로부터 받는 메시지는 꾸준한 운동을 유도하고, 동기부여를
            제공합니다. 꾸준히 운동하지 않을 경우, 캐릭터가 좀비로 변하거나
            행성의 상태가 점점 악화할 수 있으므로 꾸준한 관리가 필요합니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Jelly;

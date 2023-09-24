/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components

function SignalLive(props) {
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
        <div className="project-img signal-img_title"></div>
        <div className="project-desc" style={{ marginTop: "40px" }}>
          <h1 style={{ color: "white" }}>Signal Live</h1>
          <p style={{ gridColumn: "1/3" }}>
            Signal Live는 LIVEHIVE corp.에서 제작한 참여형 개인 방송
            플랫폼입니다. 다른 개인 방송 플랫폼과 달리 방송에 시청자도 자유롭게
            참여할 수 있으며, Signal Live에서 제공되는 다양한 도구와 게임들로
            컨텐츠를 만들어 갈 수 있습니다. 또한 다른 방송과 다르게 PC 환경이
            아닌 스마트폰 환경에서 이루어져야하기 때문에 모바일 UX의 설계가
            중요했습니다.
          </p>
          <p style={{ gridColumn: "3/5" }}>
            저는 Signal Live의 모든 UX/UI 디자인, 그래픽 디자인, 인터렉션
            디자인을 진행하였으며, 프로젝트 개발 과정까지 팔로우업 하였습니다.
            앱스토어와 구글 플레이스토어에서 배포 및 서비스 되었습니다.
          </p>

          <p style={{ gridColumn: "1/5", opacity: "0.2" }}>
            *프로젝트에 사용된 사진은 컨셉을 표현하기위해 사용되었으며
            상업적으로 사용되지 않았음을 밝힙니다.
          </p>
        </div>

        {/* project info card */}
        <div className="project-info" style={{ backgroundColor: "#161717" }}>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Client
            <p>LIVEHIVE corp.</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Project info
            <p>Commercial</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            My Role
            <p>UX/UI, Interaction, Branding, Motion</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2020</p>
          </p>
        </div>
      </div>

      {/* 1번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-container"
          style={{
            margin: "100px 0 80px 0",
          }}
        >
          <div
            className="signal-img_01"
            style={{
              gridColumn: "1/5",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          ></div>
          <h1 style={{ gridColumn: "1/2", color: "white", opacity: "0.8" }}>
            1. Home
          </h1>
          <p style={{ gridColumn: "2/5", color: "white", opacity: "0.8" }}>
            Home 화면에서는 현재 진행중인 방송 리스트를 확인할 수 있습니다. 초기
            유저와 방송의 수가 적은 환경에서 운영하는 것을 고민하였습니다. 방송
            시간을 미리 적어두어, 현재 방송중이지 않은 경우에도 예약하기 기능을
            제공하거나 알람을 받을 수 있도록 하였습니다. 운영 환경에 맞게 조합
            가능하도록 시스템화 하였습니다.
          </p>
        </div>
      </div>

      {/* 2번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-container"
          style={{
            margin: "100px 0 80px 0",
          }}
        >
          <div
            className="signal-img_02"
            style={{
              gridColumn: "1/5",
              marginTop: "60px",
              borderRadius: "4px",
            }}
          ></div>
          <h2 style={{ gridColumn: "1/2", color: "white" }}>
            1-1. Main Brand Card
          </h2>
          <p style={{ gridColumn: "2/5", color: "white", opacity: "0.6" }}>
            Main Brand Card는 다양한 BJ 방송의 홍보를 위한 유용한 컴퍼넌트
            입니다. 현재 방송중인 방송에 대한 알람을 설정하시거나, 방송중인
            경우에는 즉시 입장하실 수 있습니다. 이미지를 레이어로 구성하여,
            다양한 스타일로 파생시키는 것도 가능합니다. Main Brand Card는
            서비스를 더욱 효과적으로 운영할 수 있는 도움을 줄 것입니다.
          </p>
          <div
            className="signal-img_03"
            style={{
              gridColumn: "1/5",
              marginTop: "60px",
              borderRadius: "4px",
            }}
          ></div>
          <h2 style={{ gridColumn: "1/2", color: "white" }}>
            1-2. Modular Assets
          </h2>
          <p style={{ gridColumn: "2/5", color: "white" }}>
            애플리케이션의 지속적인 운영을 위해 Modular Assets 형태로
            디자인되었습니다. 이 페이지를 통해서 새로운 페이지를 생성하거나,
            추가 컴퍼넌트를 생성하는데 유리한 디자인으로 구축했습니다. 이로써
            애플리케이션의 지속적인 서비스 운영이 가능하도록 하였습니다.
          </p>
        </div>
      </div>

      {/* 2번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-container"
          style={{
            margin: "100px 0 80px 0",
          }}
        >
          <div
            className="signal-img_04"
            style={{
              gridColumn: "1/5",
              marginBottom: "10px",
              borderRadius: "4px",
            }}
          ></div>{" "}
          <h1 style={{ gridColumn: "1/2", color: "white" }}>2. Studio</h1>
          <p style={{ gridColumn: "2/5", color: "white" }}>
            "Studio" 페이지는 BJ들의 고유한 방송국입니다. 사용자는 Audio, Video
            방송을 선택하여 방송을 시청할 수 있습니다. BJ들은 시청자가 참여할 수
            있는 영역을 추가할 수 있어서 참여를 유도할 수 있습니다. 또한,
            제공되는 다양한 도구를 통해 재미있는 컨텐츠를 만들 수 있습니다. 여러
            이미지를 겹치더라도 시인성과 사용성에 지장이 없도록
            디자인하였습니다.
          </p>
          <div
            className="signal-img_05"
            style={{
              gridColumn: "1/5",
              marginTop: "60px",
              borderRadius: "4px",
            }}
          ></div>
          <h2 style={{ gridColumn: "1/2", color: "white" }}>
            2-1. Studio Bubble
          </h2>
          <p style={{ gridColumn: "2/5", color: "white" }}>
            "Studio" 페이지에서 사용되는 Bubble은 사용자들이 클릭하여 참여할 수
            있는 컴퍼넌트입니다. 다양한 상태와 상황에 대응할 수 있도록 각각의
            Bubble들이 최적화된 디자인으로 구성되어 있습니다.
          </p>
          <div
            className="signal-img_06"
            style={{
              gridColumn: "1/5",
              marginTop: "60px",
              borderRadius: "4px",
            }}
          ></div>
          <h2 style={{ gridColumn: "1/2", color: "white" }}>
            2-2. Studio Buttons
          </h2>
          <p style={{ gridColumn: "2/5", color: "white" }}>
            "Studio" 페이지에서 사용되는 기능 Button은 다양한 권한과 로그인
            상태에 따라서 다르게 보여집니다. BJ 별 권한 및 사용자의 로그인
            상태를 고려하여 디자인하였습니다. 이로인해 사용자들이 쉽고 빠르게
            원하는 기능에 접근할 수 있도록 합니다.
          </p>{" "}
          <div
            className="signal-img_07"
            style={{
              gridColumn: "1/5",
              marginTop: "60px",
              borderRadius: "4px",
            }}
          ></div>
          <h2 style={{ gridColumn: "1/2", color: "white" }}>
            2-3. Studio Control Toast UI
          </h2>
          <p style={{ gridColumn: "2/5", color: "white" }}>
            "Studio"에서 사용 가능한 팝업 기능들은 방송 화면을 방해하지 않도록
            고안된 디자인입니다. 사용자들은 게임을 즐기거나, 방송 환경을
            설정하거나, BJ에게 후원할 수 있으며, 이러한 기능들이 방송 시청에
            방해가 되지 않도록 최소화 하는 것이 고려되었습니다.
          </p>
          <div
            className="signal-img_08"
            style={{
              gridColumn: "1/5",
              marginTop: "60px",
              borderRadius: "4px",
            }}
          ></div>
          <h2 style={{ gridColumn: "1/2", color: "white" }}>2-4. Payments</h2>
          <p style={{ gridColumn: "2/5", color: "white" }}>
            "Studio"에서는 방송을 보는 동안 BJ에게 후원할 수 있는 편리한 기능을
            제공합니다. 사용자는 메시지와 함께 스티커를 선택하여 BJ에게 후원을
            할 수 있습니다. 후원을 하게 되면 선택한 메시지와 스티커가 방송에
            표시되어 즉시 BJ와 관련된 경험을 제공합니다. 이는 사용자에게 방송을
            보는 경험을 더욱 즐겁게 할 수 있도록 도와줍니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignalLive;

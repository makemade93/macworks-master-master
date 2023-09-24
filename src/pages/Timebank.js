/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

// video
import video from "../imgs/timebank/timebank_video.mp4";

//components

function Timebank(props) {
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
        <div className="project-img project-img_title"></div>
        <div className="project-desc" style={{ marginTop: "50px" }}>
          <h1>시간은행</h1>
          <p style={{ gridColumn: "1/3" }}>
            "시간은행"은 청소년들의 스마트폰 사용 관리를 돕는 스마트폰 앱
            서비스입니다. 청소년들의 과도한 스마트폰 사용에 대한 우려가
            높아지면서 이미 사용을 제한하는 다양한 서비스들이 존재하고 있습니다.
            하지만 시간은행은 저축이라는 개념을 접목해 독특한 접근 방식을 취하고
            있습니다. 십대들은 나중에 사용할 수 있도록 할당된 스마트폰 사용
            시간을 절약하여 사용에 대한 자율성을 부여할 수 있습니다.
          </p>
          <p style={{ gridColumn: "3/5" }}>
            이 프로젝트의 목표는 청소년들이 스마트폰으로 겪는 문제를 해결하고
            궁극적으로 스마트폰 사용에 대한 자기 훈련을 하도록 돕는 것입니다.
            2명에서 진행한 이 프로젝트에서 저는 UX/UI 디자인과 모션 그래픽
            디자인을 담당하였습니다. 자연스러운 App Flow 설계와 Identity 있는
            Interaction을 통해 사용자 친화적으로 설계되었습니다.
          </p>
        </div>

        {/* project info card */}
        <div className="project-info" style={{ backgroundColor: "#161717" }}>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Project info
            <p>Concept, Team Project</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Member
            <p>
              Yein Kim
              <p style={{ opacity: "0.5" }}>
                UX/UI, Character Design, Prototyping
              </p>
            </p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            My Role
            <p>UX/UI, Motion Graphic</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2019</p>
          </p>
        </div>
      </div>

      {/* 1번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "white" }}>
        <video
          controls="controls"
          className="project-video"
          style={{ marginTop: "100px" }}
        >
          <source src={video} type="video/mp4" />
        </video>
        <div className="project-container">
          <h1>Background</h1>
          <p style={{ gridColumn: "1/3" }}>
            시간은행 프로젝트는 과도한 스마트폰 사용으로 부모와 자녀 사이에
            갈등이 커지는 해법으로 출발하였습니다. 이 문제에 사용할 수 있는 현재
            서비스는 자녀가 스마트폰을 사용하는 중이더라도 일정 시간이 지나면
            스마트폰을 강제로 끄는 것과 같은 솔루션을 사용합니다. 이것은 부모와
            자녀 사이에 더 많은 갈등과 정서적 긴장으로 이어질 수 있습니다.
          </p>
          <p style={{ gridColumn: "3/5" }}>
            우리는 인터뷰를 진행한 결과, 많은 청소년과 부모들이 이러한 갈등에
            직면해 있는 것으로 나타났습니다. 시간은행 프로젝트의 목표는 아이들이
            스마트폰을 사용하는 것을 막는 것이 아니라 목적과 목적을 명확히
            이해하고 목적과 필요에 따라 스마트폰을 사용할 수 있는 자율성을
            부여하는 것입니다.
          </p>
        </div>
      </div>

      {/* 2번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "white" }}>
        <div className="project-img-grid">
          <div className="project-img_2"></div>
          <div className="project-img_3"></div>
          <div className="project-img_4"></div>
        </div>
        <div className="project-container" style={{ margin: "20px 0 80px 0" }}>
          <h1>Key visual - Time Bank</h1>
          <p style={{ gridColumn: "1/3" }}>
            이 프로젝트의 Main Concept은 "시간은행"입니다. 앞서 설명한 것 처럼
            시간은행의 목표는 우리가 자원을 절약하고 필요에 따라 사용하는 것과
            유사하게 아이들이 스마트폰 사용 시간을 자율적으로 관리할 수 있는
            개념을 도입하는 것입니다.
          </p>
          <p style={{ gridColumn: "3/5" }}>
            Key Visual 디자인은 시간을 상징하는 시계에서 영감을 얻었으며
            아이소메트릭 그리드를 통해 개발하여 물리적인 느낌을 줍니다. 디자인은
            또한 서비스와 브랜드를 개발하는 과정에서 우리가 정의한 가치를
            반영합니다.
          </p>
        </div>
      </div>

      {/* 3번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "white" }}>
        <div
          className="project-img-grid"
          style={{ marginBottom: "0", borderBottom: "none" }}
        >
          <div className="project-img_5"></div>
        </div>
        <div className="project-img-grid" style={{ marginTop: "0" }}>
          <div className="project-img_7"></div>
          <div className="project-img_6"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
          }}
        >
          <h1>Visual Concept - Child Friendly</h1>
          <p style={{ gridColumn: "1/3" }}>
            앱의 비주얼 전략으로는 아이들에게 친숙한 방식으로 접근하도록
            설계되었습니다. 둥근 손글씨 기반의 폰트와 폰트에 최적화된 아이콘,
            캐릭터 디자인이 특징입니다. 서비스 전반에 걸쳐 십대들과 친근하게
            소통할 수 있도록 시각적 요소를 디자인하였습니다.
          </p>
          <p style={{ gridColumn: "3/5" }}>
            특히 캐릭터는 이전에 디자인한 "Time Coin"과 함께 조합하여 사용할 수
            있도록 아이소메트릭 기반으로 디자인되었습니다. 캐릭터를 서로
            결합하여 다양한 의미의 새로운 그래픽을 만들 수 있습니다.
          </p>
        </div>
      </div>

      {/* 4번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-container"
          style={{
            margin: "200px 0 80px 0",
          }}
        >
          <div
            className="project-img_8"
            style={{
              gridColumn: "1/5",
              marginBottom: "20px",
              borderRadius: "24px",
            }}
          ></div>
          <h1 style={{ gridColumn: "1/2", color: "white" }}>Main Functions</h1>
          <p style={{ gridColumn: "2/5", color: "#CCCCCC" }}>
            "시간은행" 앱의 주요 기능은 "약속시간", "시간금고", "리포트", 그리고
            "투게더"로 구성되어 있습니다. 각 기능은 서로 연결되어 있어 정보
            교환이 효율적으로 이루어집니다. 모든 기능은 사용자의 자율적인 선택에
            따라 적용될 수 있어 사용자가 편안하게 사용할 수 있도록 디자인되어
            있습니다.
          </p>
        </div>
      </div>

      {/* 5번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-container"
          style={{
            margin: "100px 0 80px 0",
          }}
        >
          <h3
            style={{
              gridColumn: "1/2",
              color: "white",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            01. 약속시간
          </h3>
          <p
            style={{
              gridColumn: "2/5",
              color: "#CCCCCC",
              fontSize: "14px",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            약속시간은 시간은행의 핵심 기능 입니다. 아이들은 부모와 협의 후 매일
            정해진 스마트폰 사용시간을 받아, 스스로 제한된 시간 만큼만 사용할 수
            있습니다. 아이들은 사용하지 않은 시간을 저축할 수 있습니다. 또한
            저축하는 행위가 재미있게 이루어지도록 간단하면서도 직관적인
            인터렉션을 디자인했습니다. 사용자는 손쉽게 자신이 사용할 수 있는
            시간과 저축된 시간을 확인할 수 있습니다.
          </p>
          <div
            className="project-img_9"
            style={{
              gridColumn: "1/5",
              margin: "30px 0 100px 0",
            }}
          ></div>
          {/* ---------------------------- */}
          <h3
            style={{
              gridColumn: "1/2",
              color: "white",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            02. 시간금고
          </h3>
          <p
            style={{
              gridColumn: "2/5",
              color: "#CCCCCC",
              fontSize: "14px",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            "시간금고"는 사용한 내역과 저축한 내용을 확인할 수 있습니다. 저축한
            시간은 내가 생성한 아바타를 기반으로 환산해주고,
            <br />
            환산된 결과는 재미있는 그래픽으로 표현됩니다.
          </p>
          <div
            className="project-img_10"
            style={{
              gridColumn: "1/5",
              margin: "30px 0 100px 0",
            }}
          ></div>
          {/* ---------------------------- */}
          <h3
            style={{
              gridColumn: "1/2",
              color: "white",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            03. 리포트
          </h3>
          <p
            style={{
              gridColumn: "2/5",
              color: "#CCCCCC",
              fontSize: "14px",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            "리포트" 기능은 사용자의 스마트폰 사용 패턴을 추적하여 제공하는
            기능입니다. 사용자는 어떤 앱을 많이 사용하고, 어떤 기능을 가장 오래
            사용하는지 파악할 수 있으며, 사용한 시간이 많은 앱이나 기능을 알 수
            있습니다. 또한 사용 시간이 가장 많은 시간대도 파악할 수 있습니다.
            이를 통해 사용자의 상황과 관심사에 맞는 앱을 추천하거나, 사용자의
            스마트폰 사용 패턴을 개선하는데 도움이 됩니다.
          </p>
          <div
            className="project-img_11"
            style={{
              gridColumn: "1/5",
              margin: "30px 0 100px 0",
            }}
          ></div>
          {/* ---------------------------- */}
          <h3
            style={{
              gridColumn: "1/2",
              color: "white",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            04. 투게더
          </h3>
          <p
            style={{
              gridColumn: "2/5",
              color: "#CCCCCC",
              fontSize: "14px",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            "투게더" 기능은 시간은행 앱에서만 사용할 수 있는 특별한 기능입니다.
            아이들은 시간은행에서 친구들을 추가하여, 친구들과 함께 게임을 하며,
            목표를 세우고 이를 달성할 수 있습니다. 이는 동기부여와 습관 생성에
            큰 도움이 될 것입니다.
          </p>
          <div
            className="project-img_12"
            style={{
              gridColumn: "1/5",
              margin: "30px 0 100px 0",
            }}
          ></div>
        </div>
      </div>

      {/* 6번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "#19191B" }}>
        <div
          className="project-container"
          style={{
            margin: "150px 0 30px 0",
          }}
        >
          <h1 style={{ color: "white" }}>학부모 앱 주요기능</h1>
          <p style={{ gridColumn: "1/3", color: "#CCCCCC" }}>
            "시간은행"은 학부모와 자녀를 위한 두 개의 앱으로 구성되어 있습니다.
            학부모 앱은 자녀의 스마트폰 사용 패턴을 이해하는 데 도움이 될 수
            있으며, 자녀가 어떤 좋은 습관을 형성하고 있는지를 파악할 수
            있습니다.
          </p>
          <p style={{ gridColumn: "3/5", color: "#CCCCCC" }}>
            이 앱은 감시의 개념이 아닌 자녀를 이해하는 형식으로 정보를 제공하고,
            디자인되어 있어 깊이 이해할 수 있습니다. "시간은행"을 통해 학부모는
            자신의 자녀에 대해 더 깊이 이해할 수 있습니다.
          </p>
        </div>
      </div>

      {/* 7번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "#19191B" }}>
        <div
          className="project-container"
          style={{
            margin: "100px 0 80px 0",
          }}
        >
          <h3
            style={{
              gridColumn: "1/2",
              color: "white",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            01. 약속시간
          </h3>
          <p
            style={{
              gridColumn: "2/5",
              color: "#CCCCCC",
              fontSize: "14px",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            "약속시간"은 학부모와 자녀간의 소통을 쉽게하며, 스마트폰 사용을
            적극적으로 관리할 수 있도록 도와주는 기능입니다. "약속시간"은 자녀의
            약속시간 현황을 확인할 수 있으며, 시간을 얼마나 사용했는지, 얼마나
            남았는지, 얼마나 저축하였는지를 나타내어 확인할 수 있습니다. 앱은
            특별한 방식으로 약속시간의 사용 상태를 표시하여 학부모가 자녀의
            스마트폰 사용습관을 관리하는데 도움을 줍니다.
          </p>
          <div
            className="project-img_14"
            style={{
              gridColumn: "1/5",
              margin: "30px 0 100px 0",
            }}
          ></div>
          {/* ---------------------------- */}
          <h3
            style={{
              gridColumn: "1/2",
              color: "white",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            02. 리포트
          </h3>
          <p
            style={{
              gridColumn: "2/5",
              color: "#CCCCCC",
              fontSize: "14px",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            "리포트" 기능은 자녀의 스마트폰 사용 패턴과 습관을 이해할 수 있는
            통계적 정보를 제공합니다. 다른 서비스들과는 달리, 이를 부정적인
            관점으로 보여주는 것이 아니라, 자녀의 관심사와 꿈을 파악하기 쉬운
            긍정적인 형식으로 가공하여 제공합니다. 아이들의 관심사를 이해하고,
            그들의 꿈을 지원할 수 있습니다.
          </p>
          <div
            className="project-img_15"
            style={{
              gridColumn: "1/5",
              margin: "30px 0 100px 0",
            }}
          ></div>
          {/* ---------------------------- */}
          <h3
            style={{
              gridColumn: "1/2",
              color: "white",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            03. 백과사전
          </h3>
          <p
            style={{
              gridColumn: "2/5",
              color: "#CCCCCC",
              fontSize: "14px",
              borderTop: "1px solid rgba(255,255,255,0.8)",
              paddingTop: "10px",
            }}
          >
            "백과사전" 기능은 아이들의 앱을 위한 검색 툴입니다. 검색어로 알고
            싶은 앱을 입력하면 정보와 다른 부모들의 평가가 함께 표시됩니다.
            검색한 앱에 대한 깊은 이해와 타인의 경험을 참고할 수 있어 당신의
            아이들의 앱 선택에 도움이 될 것입니다.
          </p>
          <div
            className="project-img_16"
            style={{
              gridColumn: "1/3",
              margin: "30px 0 100px 0",
            }}
          ></div>
          <div
            className="project-img_17"
            style={{
              gridColumn: "3/5",
              margin: "30px 0 100px 0",
            }}
          ></div>
          {/* ---------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Timebank;

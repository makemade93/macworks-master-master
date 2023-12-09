/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

// Video

import ds_video from "../imgs/designsystem/designsystem_video.mp4";

//components
function DesignSystem(props) {
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
            <p>Team Project</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            My Role
            <p>Designer</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            State
            <p>Inprogress</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2023~</p>
          </p>
        </div>

        {/* 1번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_1"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Project Statements
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            Samsung Developers Design System은 Samsung의 모든 개발자 관련
            웹사이트를 위해 특별히 디자인되었습니다. UX와 UI, 그리고 코드와
            디자인 시스템의 효율적인 통합을 통해 고품질 웹사이트를 손쉽게 제작할
            수 있게 되었습니다. 이를 통해 우리는 일관적인 사용자 경험을
            제공하며, 삼성 개발자 사이트만의 고유한 브랜드 가치를 창출하는 데
            기여하고자 합니다.
          </p>
        </div>

        {/* 2번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_2"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Background-1
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            삼성은 여러 개의 개발자 관련 웹사이트를 운영하고 있었습니다. 이
            웹사이트들은 튜토리얼, SDK 배포, 그리고 삼성의 제품 및 서비스와
            관련된 다양한 기능을 관리하고 있었어요. 개발자 포털, 컨퍼런스
            사이트, 교육 플랫폼, 그리고 포럼 사이트 등 다양한 종류의 웹사이트가
            포함되어 있었죠. 그러나 이 웹사이트들은 각각 독립적으로 디자인되어
            있었기 때문에 사용자 경험에서 일관성이 떨어지고, 다양한 사용성
            문제가 발생하곤 했습니다. 게다가 매년 컨퍼런스와 포럼 웹사이트를
            재디자인하는 작업은 상당한 인력과 자금을 필요로 했습니다. 이러한
            과제에 대응하기 위해, 우리는 2023년에 Samsung Developers.com Design
            System을 개발하고 배포했습니다. 이를 통해 삼성의 개발자 웹사이트
            디자인을 통합하고, 서로 협력하며 보다 효율적으로 작업할 수 있도록
            돕고자 했습니다.
          </p>
        </div>

        {/* 3번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_3"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Background-2
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            삼성 개발자 포털을 비롯한 다양한 개발자 웹사이트는 개별적으로 브랜드
            가이드, 사용자 경험 가이드, 그래픽 사용자 인터페이스 가이드, 스타일
            가이드를 각자 유지하고 있었습니다. 이로 인해 업데이트와 배포와
            관련된 문제가 종종 발생했습니다. 따라서 Samsung Developer Design
            System을 통해 이러한 가이드라인을 통합하고 최신으로 유지하는 작업을
            수행했습니다.
          </p>
        </div>

        {/* 4번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_4"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Background-3
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            디자인 시스템을 개발하면서, 우리는 다양한 가이드라인과 용어를
            체계화하였습니다. 이 과정에서 다양한 작업을 수행하였지만, 특히 각
            직무에서 사용하는 용어를 통합하는 작업은 중요한 역할을 하였습니다.
            이것은 지속 가능한 디자인 시스템을 구축하기 위한 필수적인 기초를
            마련하는 과정이었습니다. 뿐만 아니라, 우리의 디자인 시스템은 협업
            도구로서 원활하게 작동하도록 구축되었습니다. 이제 우리는 효율적이고
            일관된 디자인 작업을 위한 강력한 도구를 손에 넣었습니다.
          </p>
        </div>

        {/* 5번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_5"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Background-4
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            디자인 시스템에서 리소스를 다운로드하고 가이드라인을 확인하며, 실제
            프로젝트에 적용할 컴포넌트를 가이드에 따라 정확하게 적용하였습니다.
            더불어, 이제는 적용된 디자인 파일들을 한 곳에서 손쉽게 확인할 수
            있도록 구축하였습니다.
          </p>
        </div>

        {/* 6번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_6"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Contents
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            디자인 시스템의 구성은 크게 파운데이션, 컴포넌트와 리소스, 그리고 UX
            패턴과 GUI로 구상했습니다. 현재 Foundation, Components & Resources,
            그리고 GUI는 모두 구축이 완료되었으며, UX 패턴은 아직 진행 중에
            있습니다. 각 요소는 서로 강력한 상호 연결성을 가지고 있으며, 이
            관계성을 통해 효율적인 디자인 작업을 원활하게 수행할 수 있도록
            철저히 계획하였습니다.
          </p>
        </div>

        {/* 7번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_7"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Foundation(Baisc)-1
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            Foundation(Basic)에서는 디자인의 기본 요소들을 정리하였습니다.
            삼성에서는 Basic이라는 명칭으로 배포되었던 가이드라인의 내용이 주로
            담겨있는데, Layout과 그리드시스템은 어떻게 사용해야하는지, Spacing,
            Radious 등 골격에서부터 컬러 폰트 타이포그래피 등의 스타일적인
            내용까지 담겨있습니다.
          </p>
        </div>

        {/* 8번섹션,9번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_8"></div>
          <div className="ds-img_9"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Foundation(Baisc)-2
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            Foundation (Basic) 섹션에서는 다양한 숫자 값과 개념을 설명하는
            것뿐만 아니라 실제 적용 사례를 보여주기 위해 실제 적용된 사례를
            바탕으로 예시도 만들었습니다. 다른 사람들이 우리의 가이드라인을
            참조할 때 보다 쉽게 이해하고 적용할 수 있도록 하여, 모든 이에게
            디자인 프로세스를 보다 접근 가능하고 직관적으로 만들어 냈습니다.
          </p>
        </div>

        {/* 10번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_10"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Foundation(Baisc)-3
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            Foundation 섹션에서 우리는 타이포그래피와 컬러 등의 요소를
            프로젝트의 스타일 컴포넌트로 활용 가능한 형태로 제작하였습니다.
            이렇게 함으로써 프로젝트를 시작할 때 손쉽게 설정할 수 있도록
            하였습니다.
          </p>
        </div>

        {/* 11번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_11"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Components & Resources
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            Components 섹션에서는 실제 UI에서 자주 사용되는 요소들을 체계화하여
            재사용 가능하도록 제작하였습니다. 이로써 다음과 같은 몇 가지 이점을
            얻을 수 있습니다: 각 요소의 높은 완성도로 인해, 프로젝트 전체의
            디자인 퀄리티를 향상시킬 수 있습니다. 서로 다른 컴포넌트가
            결합되어도 요소들이 조화롭게 어울리도록 보장하였습니다. PC와 모바일
            디바이스 모두에서 동일한 높은 품질을 유지하도록 하였습니다. 각
            컴포넌트는 다양한 패턴과 상황에 대응할 수 있도록 제작되었습니다.
          </p>
        </div>

        {/* 12번섹션 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="ds-video"
          style={{ marginTop: "100px" }}
        >
          <source src={ds_video} type="video/mp4" />
        </video>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Components & Resources - 2 영상 추가 필요
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            우리는 컴포넌트 중에서 모션이나 인터랙션을 포함하는 경우, 해당
            모션을 확인할 수 있는 도구, 웹에 적용된 실제 사례, 그리고 실제
            개발을 위한 Lottie 파일을 패키징하여 제공하도록 하였습니다. 특히
            인터렉션은 Samsung Delopers.
          </p>
        </div>

        {/* 13번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_13"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Components & Resources - 3
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            또한 리소스 배포 역시 우리 디자인 시스템에 통합하였습니다. 리소스
            사용에 대한 가이드라인과, Export 옵션, 그리고 리소스가 적용된
            컴포넌트까지 모두 다이렉트 링크로 연결하여, 작업자들이 동적으로
            정보를 찾아볼 수 있도록 하였습니다.
          </p>
        </div>

        {/* 15번섹션 */}
        <div
          className="project-img-grid"
          style={{
            margin: "220px 0 0 0",
            border: "none",
          }}
        >
          <div className="ds-img_14"></div>
        </div>
        {/* 14번섹션 */}
        <div
          className="project-container"
          style={{
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Screens
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            2023년부터 삼성 개발자 관련 웹 사이트에 디자인 시스템을 적용하고
            있습니다. 이를 통해 빠른 웹 개발 뿐만 아니라 각 웹 사이트가 달성해야
            하는 목표를 달성하는 데 도움을 주고 있습니다. Samsung Developers
            Conference 23 및 Samsung Developer Conference 23 Korea에서는 이
            시스템을 적용하여 배포하였으며, Samsung Developer Portal은 시스템에
            맞추어 개편 작업이 진행 중입니다. 뿐만 아니라, 개발된 사이트의 GUI
            파일은 시스템의 일부로 귀속되어 있어, 시스템이 더 높은 품질로 발전할
            수 있도록 선순환 구조를 구축하였습니다.
          </p>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_15"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_16"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_17"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_18"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_19"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_20"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_21"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_22"></div>
        </div>
        {/* 15번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="ds-img_23"></div>
        </div>
      </div>
    </div>
  );
}

export default DesignSystem;

/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components
function SDC23(props) {
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
            Credit
            <p>Samsung Electronics, Cheil AD, H9</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            My Role
            <p>Main Design Lead, UX/UI Design</p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2023</p>
          </p>
        </div>

        {/* 1번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="sdc23-img_1"></div>
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
            이 프로젝트는 삼성의 공식 개발자 컨퍼런스인 SDC23 웹사이트를 만드는
            작업입니다. SDC23 웹사이트는 사용자들이 이벤트에 등록하고 이벤트를
            홍보하며 라이브 스트리밍을 시청하며 이벤트가 끝난 후 참여한 세션 및
            완료한 미션을 기록할 수 있는 기능을 제공합니다. 이러한 기능들은
            행사의 시작부터 끝까지 이벤트 경험을 풍성하게 만드는 데 중요한
            역할을 합니다.
          </p>
        </div>

        {/* 2번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="sdc23-img_2"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Background
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            이 프로젝트는 삼성의 공식 개발자 컨퍼런스인 SDC23 웹사이트를 만드는
            작업입니다. SDC23 웹사이트는 사용자들이 이벤트에 등록하고 이벤트를
            홍보하며 라이브 스트리밍을 시청하며 이벤트가 끝난 후 참여한 세션 및
            완료한 미션을 기록할 수 있는 기능을 제공합니다. 이러한 기능들은
            행사의 시작부터 끝까지 이벤트 경험을 풍성하게 만드는 데 중요한
            역할을 합니다. 프로젝트를 시작하기 전에 우리는 달성해야 할 목표들을
            자세히 계획하였습니다. SDC23 웹 개발 프로젝트는 종합적인 시각이
            필요한 작업이었습니다. SDC22에서 발견된 문제를 개선하고 동시에
            새로운 기능을 개발하는 것이 요구되었습니다. 디자인 부분에서는 사이트
            구축 중에 개발된 2023년 삼성 개발자닷컴 디자인 시스템을
            통합하였으며, 또한 이 시스템과 원활하게 조화를 이루는 디자인을
            개발하는 데 노력하였습니다. 더불어 최신 웹 트렌드를 놓치지 않도록
            주의를 기울였습니다.
          </p>
        </div>

        {/* 3번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="sdc23-img_3"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Main(Home)
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            SDC23의 메인 화면은 사용자가 행사의 다양한 콘텐츠의 매력적인 측면을
            즉각적으로 체험하고, 행사에 대한 관심을 자연스럽게 끌어올리며 원하는
            콘텐츠로 유입시키는 것을 목표로 합니다."매력적인 요소를 전달"하기
            위해서는 다양한 접근 방식이 있지만, 우리는 간결한 텍스트와 명료한
            이미지를 사용하여 사용자의 주목을 빠르게 확보하는 방식을 택했습니다.
            이러한 방법을 극대화하기 위해 시각적인 매력을 높이기 위한 인터랙티브
            요소들을 개발하였습니다.
          </p>
        </div>

        {/* 4번섹션, 5번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="sdc23-img_4"></div>
          <div className="sdc23-img_5"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Main(Home)
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            SDC23에서는 빠른 시간 내에 사용자의 흥미를 유발하기 위해 핵심적인
            텍스트와 이미지를 중심으로 설계되었습니다.이러한 사용자 경험을
            구현하기 위해 웹의 특성을 최대한 활용하려고 노력했습니다. 이를 위해
            None-Hover 웹 상호작용의 특성을 적극적으로 활용하였으며, 더불어
            "자세히 보기"나 "링크로 이동"와 같은 상호작용 버튼을 설계하였습니다.
            이로써 사용자들은 웹사이트를 보다 쉽게 탐색하고 더 많은 정보를 얻을
            수 있게 되었습니다.
          </p>
        </div>

        {/* 6번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="sdc23-img_6"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Video Page
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            저희는 라이브 및 온디맨드 형식으로 다양한 이벤트 세션을 제공합니다.
            사용자들은 개별 세션뿐만 아니라 삼성이 선별한 관련 콘텐츠를
            자연스럽게 탐색하고 찾아볼 수 있습니다. 이러한 세션의 독특한 특성에
            맞게 페이지 디자인을 맞추었습니다. 특정 주제를 다루는 세션부터
            릴레이 형식으로 제공되거나 스케줄이 필요한 세션까지, 각 페이지는
            해당 특성과 조화를 이루도록 디자인되었습니다.
          </p>
        </div>

        {/* 7번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="sdc23-img_7"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Help Join Event, Memory Event
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            우리는 웹을 통해 이벤트의 시작부터 끝까지 참가자들에게 더욱 풍부한
            경험을 제공하기 위한 디자인을 수행했습니다. 이 디자인은 이벤트에
            대한 관심을 유발하고 등록을 간편하게 만들어주며, 행사장의 위치를 웹
            지도로 확인하고 쉽게 찾을 수 있도록 도와줍니다. 또한, 사용자들은
            관심 있는 세션을 미리 예약하여 놓치지 않을 수 있도록 합니다. 더불어
            사용자가 완료한 컨텐츠는 행사 종료 후에도 저장되어 이어지는 행사
            경험을 즐길 수 있도록 고안되었습니다. 이러한 디자인은 온라인과
            오프라인 행사 경험을 연결하여 참가자들에게 보다 풍부하고 연속성 있는
            경험을 제공합니다.
          </p>
        </div>

        {/* 8번섹션 */}
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="sdc23-img_8"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            gridAutoColumns: "1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <h2 style={{ gridColumn: "1/2", color: "white", opacity: "1" }}>
            Mobile Friendly
          </h2>
          <p style={{ gridColumn: "2/6", color: "white", opacity: "1" }}>
            모든 디바이스에서 동일한 경험과 퀄리티를 유지할 수 있도록 반응형으로
            설계하고 디자인 하였습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SDC23;

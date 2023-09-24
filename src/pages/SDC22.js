/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components

function SDC22(props) {
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
        <div className="project-img SDC-img_title"></div>
        <div className="project-desc" style={{ marginTop: "50px" }}>
          <h1 style={{ gridColumn: "1/5" }}>
            삼성 개발자 컨퍼런스 사이트 구축과
            <br />
            이벤트 사이트 시스템 확보
          </h1>
          <p style={{ gridColumn: "1/5" }}>
            삼성전자 공식 개발자 컨퍼런스인 SDC22 컨퍼런스 사이트와 다른 개발자
            컨퍼런스에 적용 가능한 이벤트 사이트 시스템을 구축했습니다. 컨퍼런스
            참여자들에게 필요한 필수기능과 여러 유용한 기능을 담아 SDC22 행사에
            몰입할 수 있도록 하였으며, 다른 행사에도 적용 가능한 시스템을
            확보하였습니다.
          </p>
        </div>

        <div className="project-info" style={{ backgroundColor: "#161717" }}>
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
            <p>
              UX/UI Design, Interaction, <br />
              Visual Design Direction
            </p>
          </p>
          <p style={{ fontWeight: "bold", opacity: "0.8" }}>
            Year
            <p>2022</p>
          </p>
        </div>
        {/* project info card */}
      </div>

      {/* work process */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="SDC-img_0"></div>
        </div>
        <div className="project-container" style={{ margin: "20px 0 80px 0" }}>
          <h1 style={{ color: "white", gridColumn: "1/2" }}>Work Process</h1>
          <p style={{ gridColumn: "2/5", opacity: "0.8", color: "white" }}>
            SDC22 이벤트 만의 특성과 주요 기능들을 확보하면서, 이번 사이트 구축
            프로젝트를 통해 매번 여러 주최에 의해 새롭게 개발되는 사이트
            개발비용을 절감하고, 삼성 만의 일체감 있는 이벤트 사이트 경험을
            제공하고자 하였습니다.
          </p>
        </div>
      </div>

      {/* 개요 1*/}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="SDC-img_index1"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ color: "white", gridColumn: "1/5" }}>
            1. 동시에 이루어지는 여러 라이브 세션과 60여개의 녹화 세션을
            사용자가 혼동없이 컨텐츠를 소비하기 어려움
          </h1>
          <p style={{ gridColumn: "1/5", opacity: "0.8", color: "white" }}>
            SDC22 오프라인 행사장에서는 각기 다른 장소에서 동시에 여러가지
            라이브 세션들이 진행됩니다. 오프라인 행사에서는 참여자들이 직접
            관심있는 세션을 찾아서 듣는 형태로 진행됩니다. 해당 경험을 웹
            환경으로 옮겨왔을 때에 사용자가 불편하지 않고 자연스럽게 컨퍼런스를
            관람하는 경험을 제공하고자 했습니다. 또한 동시에 이루어지는 세션에서
            Mega Hall에서 이루어지는 자사에서 강조하는 키노트 세션들로 사람들을
            모으는 프로세스도 설계가 필요했습니다.
          </p>
        </div>
      </div>

      {/* 개요 2*/}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="SDC-img_index2"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ gridColumn: "1/5", color: "white" }}>
            2. 70개의 세션이 제공되었을 때에 사용자가 자신이 원하는 세션을 쉽게
            찾기 어려움
          </h1>
          <p style={{ gridColumn: "1/5", opacity: "0.8", color: "white" }}>
            SDC22에서 제공하는 세션의 종류가 많고 다양하기 때문에 사용자가
            원하는 정보를 찾기 어려울 수 있습니다. 행사 등록시에 관심 분야
            정보를 획득하여, 이를 바탕으로 추천 세션을 제공하거나, 검색/필터
            장치를 통해 원하는 세션을 사용자에게 제공하도록 설계해야 했습니다.
          </p>
        </div>
      </div>

      {/* 개요 3*/}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="SDC-img_index3"></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            paddingBottom: "50px",
          }}
        >
          <h1
            style={{ gridColumn: "1/4", color: "white", wordBreak: "keep-all" }}
          >
            3. 매년 신규 행사 사이트 개발 비용 소모,Samsung Developer 만의
            통일된 시스템 구축을 통한 경험 제공 및 비용 절감 필요
          </h1>
          <p style={{ gridColumn: "1/5", opacity: "0.8", color: "white" }}>
            이벤트 사이트 구축을 매년 신규로 제작하고 있었으며, 기존의
            히스토리가 남지 않고 있는 상황이였습니다. 또한 컨퍼런스의 주체가
            각기 다르고 이로 인해 통일된 경험을 제공하지 않고 서로 다른 회사에서
            제공하는 컨퍼런스로 느껴진다는 이야기가 있었습니다. Mother Site인
            developer.samsung.com을 기준으로 삼성개발자의 브랜드 경험을 강화하고
            컨퍼런스 운영의 효율화를 위해 시스템화 가능한 형태로 구축할 필요가
            있었습니다.
          </p>
        </div>
      </div>

      {/* 간지 */}
      <div
        className="container-wrapper"
        style={{ backgroundColor: "white", height: "600px" }}
      >
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className=""></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            paddingBottom: "50px",
          }}
        >
          <h1
            style={{
              gridColumn: "1/5",
              wordBreak: "keep-all",
              textAlign: "center",
              color: "black",
            }}
          >
            Samsung Developers Conference22
            <br />
            Hybrid Event System, More Interactive and More Samsung Developersly
          </h1>
        </div>
      </div>

      {/* 산출물1-라이브1*/}
      <div className="container-wrapper" style={{ backgroundColor: "#DCDCDC" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", paddingTop: "100px" }}
        >
          <h1
            style={{
              gridColumn: "1/5",
              color: "black",
              wordBreak: "keep-all",
              textAlign: "center",
            }}
          >
            현장감 있는 라이브세션
          </h1>
          <h1
            style={{
              gridColumn: "1/5",
              color: "black",
              wordBreak: "keep-all",
              opacity: "0.3",
              textAlign: "center",
            }}
          >
            라이브세션을 통해서 컨퍼런스의 현장 분위기를 생생하게 전달합니다.
          </h1>
          <div className="SDC-img_live1" style={{ marginTop: "30px" }}></div>
          <div
            className="SDC-img_live2"
            style={{ marginTop: "50px", gridColumn: "1/5" }}
          ></div>
        </div>
        <div
          className="project-container"
          style={{
            margin: "20px 0 80px 0",
            paddingBottom: "50px",
          }}
        >
          <p
            style={{
              gridColumn: "1/5",
              opacity: "0.8",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            라이브 환경 테스트를 위해 녹화된 화면입니다. 실제 행사에서는 아래
            텍스트 내용들이 컨텐츠에 맞게 변화하도록 설계되었습니다.
          </p>
        </div>
      </div>

      {/* 산출물1-라이브2*/}
      <div className="container-wrapper" style={{ backgroundColor: "#DCDCDC" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", paddingTop: "100px" }}
        >
          <h1
            style={{
              gridColumn: "1/5",
              color: "black",
              wordBreak: "keep-all",
              textAlign: "center",
              lineHeight: "50px",
            }}
          >
            라이브가 시작되면, 놓치지 않게 알려드려요
          </h1>
          <h1
            style={{
              gridColumn: "1/5",
              color: "black",
              wordBreak: "keep-all",
              opacity: "0.5",
              textAlign: "center",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            라이브가 시작되기전 미리 대기해도, 시작되면 Live Tag,
            Reflash-Popup을 통해서 알려드립니다.
            <br />
            세션 페이지에서는 현재 라이브 현황을 한눈에 알 수 있습니다.
          </h1>
          <div
            className="SDC-img_live3"
            style={{ marginTop: "30px", gridColumn: "1/5" }}
          ></div>
          <div
            className="SDC-img_live4"
            style={{ marginBottom: "80px", gridColumn: "1/5" }}
          ></div>
        </div>
      </div>

      {/* 산출물2-서치1*/}
      <div className="container-wrapper" style={{ backgroundColor: "#9EABBB" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", paddingTop: "100px" }}
        >
          <h1
            style={{
              gridColumn: "1/5",
              color: "#436083",
              wordBreak: "keep-all",
              lineHeight: "38px",
            }}
          >
            관심있는 세션부터, 새롭게 발견하는 세션까지
          </h1>
          <h1
            style={{
              gridColumn: "1/5",
              color: "#436083",
              wordBreak: "keep-all",
              opacity: "0.7",
            }}
          >
            컨퍼런스 등록시에 선택했던 태그들과 동일한 태그들이 표기되어있어,
            <br />
            이를 통해 원하는 세션을 찾아갈 수 있습니다.
          </h1>
          <div className="SDC-img_search1" style={{ gridColumn: "1/5" }}></div>
          <div className="SDC-img_search2" style={{ gridColumn: "1/5" }}></div>
          <div className="SDC-img_search3" style={{ gridColumn: "1/5" }}></div>
          <p
            style={{
              gridColumn: "1/5",
              color: "#436083",
              opacity: "0.8",
              textAlign: "center",
              fontSize: "14px",
            }}
          >
            컨퍼런스 등록시 선택한 관심사
          </p>
          <h1
            style={{
              gridColumn: "1/5",
              color: "#436083",
              wordBreak: "keep-all",
              marginTop: "100px",
              lineHeight: "40px",
            }}
          >
            좋아하는 세션을 북마크에 저장하세요.
          </h1>
          <h1
            style={{
              gridColumn: "1/5",
              color: "#436083",
              wordBreak: "keep-all",
              opacity: "0.7",
            }}
          >
            북마크에 저장된 세션은 행사가 끝나도,
            <br />
            developer.samsung.com에서 확인할 수 있습니다.
          </h1>
          <div className="SDC-img_search4" style={{ gridColumn: "1/5" }}></div>
        </div>
      </div>

      {/* 5번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div
          className="project-img-grid"
          style={{ border: "none", paddingTop: "100px" }}
        >
          <h1
            style={{
              gridColumn: "1/5",
              color: "white",
              wordBreak: "keep-all",
              lineHeight: "38px",
            }}
          >
            일관성 있는 컨퍼런스 시스템
          </h1>
          <h1
            style={{
              gridColumn: "1/5",
              color: "white",
              wordBreak: "keep-all",
              opacity: "0.6",
            }}
          >
            재사용율이 높으면서 어떤 컨퍼런스이던지 포괄할 수 있도록
            디자인하였습니다.
            <br />
            보편적인 유아이부터 컨퍼런스에 특화된 Count down, Hover Interaction,
            Live Interaction이 포함 되었습니다.
          </h1>
        </div>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="SDC-img_2" style={{ gridColumn: "1/5" }}></div>
        </div>
        <h1
          style={{
            gridColumn: "1/5",
            color: "white",
            wordBreak: "keep-all",
            textAlign: "center",
            lineHeight: "50px",
            marginTop: "150px",
          }}
        >
          인터렉션을 통해 더 풍부한 경험을 전달합니다
        </h1>
        <h1
          style={{
            gridColumn: "1/5",
            color: "white",
            wordBreak: "keep-all",
            opacity: "0.5",
            textAlign: "center",
            fontSize: "14px",
            lineHeight: "22px",
          }}
        >
          삼성다움에 맞는 여러 웹 인터렉션을 개발하였습니다.
          <br />
          인터렉션을 통해 더 즐겁고 풍부한 경험의 컨퍼런스 사이트를 만들 수
          있습니다.
        </h1>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="SDC-img_8" style={{ gridColumn: "1/3" }}></div>
          <div className="SDC-img_9" style={{ gridColumn: "3/5" }}></div>
          <div className="SDC-img_10" style={{ gridColumn: "1/3" }}></div>
          <div className="SDC-img_11" style={{ gridColumn: "3/5" }}></div>
        </div>
        <div className="project-img-grid" style={{ border: "none" }}>
          <div className="SDC-img_12" style={{ gridColumn: "1/3" }}></div>
          <div className="SDC-img_13" style={{ gridColumn: "3/5" }}></div>
        </div>
      </div>
      {/* 9번섹션 */}
      <div className="container-wrapper" style={{ backgroundColor: "black" }}>
        <div className="project-img-grid" style={{ border: "none" }}>
          <h1
            style={{
              gridColumn: "1/5",
              color: "white",
              wordBreak: "keep-all",
              textAlign: "center",
              lineHeight: "50px",
              marginTop: "150px",
            }}
          >
            Sketch, Zepline, PPT, PDF 등으로 배포하였습니다
          </h1>
          <h1
            style={{
              gridColumn: "1/5",
              color: "white",
              wordBreak: "keep-all",
              opacity: "0.5",
              textAlign: "center",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            구축된 시스템은 디자이너 뿐만 아니라 여러 직군이 사용하기 용이하도록
            <br />각 직군에서 선호하는 형태들을 포함하여 가이드라인화
            하였습니다.
          </h1>
          <div
            className="SDC-img_14"
            style={{ gridColumn: "1/5", marginTop: "50px" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SDC22;

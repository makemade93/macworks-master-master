/* eslint-disable */

// react & Library
import React from "react";
import { useState, useEffect } from "react";

//components

function About(props) {
  // state
  let [fade, setFade] = useState("");

  // function
  useEffect(() => {
    setFade("end_transition");
  }, []);

  return (
    <div className={`container-wrapper start_transition ${fade}`}>
      <div className="about_header">
        <div className="about_header-wrapper">
          <div className="about_header-text">
            <h1>KIHYUN KIM</h1>
            <h1>ARCHIVE.MACKWORS</h1>
            <h3>
              Hello, I am an experienced UX/UI designer with a focus on visual
              design. As a designer, I possess a strong understanding of
              development that allows me to create a variety of digital designs.
              I center my designs around visual design while considering user
              experience. I am passionate about designing the digital world and
              I look forward to working with you to create successful projects
              in the future.
            </h3>
            <div>
              <h3
                style={{
                  display: "inline-block",
                  textDecoration: "underline",
                  color: "#0094FF",
                  opacity: "0.5",
                  marginRight: "30px",
                }}
              >
                artist_hyun@naver.com
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  marginRight: "30px",
                  textDecoration: "underline",
                  color: "#0094FF",
                  opacity: "0.5",
                }}
              >
                82+ 10 2078 4036
              </h3>
              <h3
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  textDecoration: "underline",
                  color: "#0094FF",
                  opacity: "0.5",
                }}
              >
                be.net/artist_hyun
              </h3>
            </div>
          </div>
          <div className="about_header-image"></div>
        </div>
      </div>
      <div className="about_card" style={{ marginTop: "48px" }}>
        <h3 style={{ gridRow: "1/4" }}>Job Experience</h3>
        <div
          className="about_card-textwrapper"
          style={{ paddingTop: "0", marginTop: "50px" }}
        >
          <p>Samsung Electronics (2020 - )</p>
          <p>UX/UI Designer / Designer</p>
        </div>
        <div className="about_card-textwrapper">
          <p>Samsung Design Membership (2017 - 2019)</p>
          <p>Visual Designer / 수습생</p>
        </div>
        <div className="about_card-textwrapper">
          <p>Naver Labs (2017)</p>
          <p>Visual Designer / Intern</p>
        </div>
        <div
          className="about_card-textwrapper"
          style={{ marginBottom: "28px", border: "none" }}
        >
          <p>SBS (2016)</p>
          <p>Motion Graphic Designer / Intern </p>
        </div>
      </div>
      <div className="about_card">
        <h3 style={{ gridRow: "1/3" }}>Awards</h3>
        <div
          className="about_card-textwrapper"
          style={{ paddingTop: "0", marginTop: "50px" }}
        >
          <p>Adobe Design Acheivement AWARDS</p>
          <p>Winner(Commercial - WEP/APP/Game Design) - 2018</p>
        </div>{" "}
        <div className="about_card-textwrapper">
          <p>PIN UP Concept Design Awards</p>
          <p>Silver - 2018</p>
        </div>{" "}
        <div
          className="about_card-textwrapper"
          style={{ marginBottom: "28px", border: "none" }}
        >
          <p>Cheil Idea Festival</p>
          <p>Bronze - 2016</p>
        </div>
      </div>
      <div className="about_card" style={{ marginBottom: "48px" }}>
        <h3 style={{ gridRow: "1/2" }}>Education</h3>
        <div
          className="about_card-textwrapper"
          style={{
            paddingTop: "0",
            marginTop: "50px",
            marginBottom: "28px",
            border: "none",
          }}
        >
          <p>B.F.A, Digital Media Design, Hong-ik University (2012 - 2020)</p>
        </div>
      </div>
    </div>
  );
}

export default About;

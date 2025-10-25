import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./style.min.css";
import {
  MdSchool as SchoolIcon,
  MdStar as StarIcon,
  MdWork as WorkIcon,
} from "react-icons/md";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

/** ----- tiny style helpers (no extra CSS files) ----- */
const COLORS = {
  work: "#4e8ef7",              // work card blue
  workArrow: "#3f7eea",
  eduBg: "linear-gradient(135deg, #0f172a, #1e293b)", // deep navy gradient
  eduText: "#facc15",           // warm gold for edu text
};

const makeCardStyle = (bg, color = "#fff") => ({
  background: bg,
  color,
  borderRadius: "16px",
  padding: "18px 22px",
  border: "1px solid rgba(255,255,255,0.16)",
  // boxShadow: "0 10px 24px rgba(33,103,219,0.22)",
  // transform: "translateY(0)",
  // transition: "transform 150ms ease, box-shadow 150ms ease",
});

const makeArrowStyle = (hexOrGradient) => ({
  // if gradient is used, pick the first color for the arrow
  borderRight: `7px solid ${
    hexOrGradient.startsWith("linear") ? "#0f172a" : hexOrGradient
  }`,
});

const iconStyleWork = {
  background: "linear-gradient(135deg, #4e8ef7, #60a5fa)",
  color: "#fff",
  boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
};

const iconStyleEdu = {
  background: "linear-gradient(135deg, #9333ea, #a855f7)",
  color: "#fff",
  boxShadow: "0 6px 14px rgba(0,0,0,0.15)",
};

/** hover helpers: gently lift the card without extra CSS */
function liftIn(e) {
  const card = e.currentTarget.querySelector(
    ".vertical-timeline-element-content"
  );
  if (card) {
    card.style.transform = "translateY(-4px)";
    card.style.boxShadow = "0 16px 36px rgba(33,103,219,0.25)";
  }
}
function liftOut(e) {
  const card = e.currentTarget.querySelector(
    ".vertical-timeline-element-content"
  );
  if (card) {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 10px 24px rgba(33,103,219,0.22)";
  }
}

const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Jumbotron fluid id="experience" className="bg-light m-0">
        <h2 className="display-4 mb-5 text-center">{experiences.heading}</h2>

        <Container className="p-7">
          <VerticalTimeline>

            {/* 1) Capital One — LEFT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position="left"
              contentStyle={makeCardStyle("#014A77")}
              contentArrowStyle={makeArrowStyle("#014A77")}
              date="2021–Present"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <img
                src={require("../../assets/img/capitalone_logo_clean.png")}
                alt="Capital One"
                style={{
                  display: "block",
                  width: "190px",       // your preferred normal size
                  maxWidth: "100%",     // prevents overflow on smaller layouts
                  height: "auto",
                  marginBottom: "16px",
                  marginTop: "-4px",
                  objectFit: "contain", // ensures it never warps
                  boxSizing: "border-box"
                }}
              />

              <h5
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
              >
                <span>Data Science Manager</span>
                <span>2025–Present</span>
              </h5>

              <h5
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
              >
                <span>Principal Data Scientist</span>
                <span>2021–2025</span>
              </h5>

              <p>Developing models to stop fraudsters.</p>
            </VerticalTimelineElement>

            {/* Georgia Tech — LEFT (education styling) */}
              <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  position="right"
                  contentStyle={makeCardStyle("#B3A369")}
                  contentArrowStyle={makeArrowStyle("#B3A369")}
                  date="2024–Present"
                  iconStyle={iconStyleEdu}
                  icon={<SchoolIcon/>}
                  onMouseEnter={liftIn}
                  onMouseLeave={liftOut}
              >
                  <img
                      src={require("../../assets/img/georgia_tech_logo_clean.png")}  // ← save your cleaned file here
                      alt="Georgia Institute of Technology"
                      style={{
                          display: "block",
                          width: "300px",        // consistent scale across your education cards
                          maxWidth: "100%",      // prevents overflow on narrow screens
                          height: "auto",
                          marginBottom: "16px",
                          marginTop: "-4px",
                          objectFit: "contain",
                          boxSizing: "border-box"
                      }}
                  />

                  <h5 className="vertical-timeline-element-subtitle">
                      M.S. in Computer Science
                  </h5>
                  <h6 className="vertical-timeline-element-subtitle">
                      Artificial Intelligence Specialization
                  </h6>

                  <p>Online Master of Science in Computer Science (OMSCS) - Current graduate work in machine learning, AI systems, and computational intelligence.</p>
              </VerticalTimelineElement>

              {/* 2) Civis — RIGHT */}
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
              position="left"
              contentStyle={makeCardStyle("#0F2F48")}
              contentArrowStyle={makeArrowStyle("#0F2F48")}
              date="2018–2021"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <img
                src={require("../../assets/img/civis_logo_clean.png")}
                alt="Civis Analytics"
                style={{
                  display: "block",
                  width: "190px",       // your intended normal size
                  maxWidth: "100%",     // prevents overflow on narrower cards
                  height: "auto",
                  marginBottom: "16px",
                  marginTop: "-4px",
                  objectFit: "contain", // prevents distortion while scaling
                  boxSizing: "border-box"
                }}
              />

              {/* Roles with right-aligned dates */}
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
              >
                <span>Staff Data Scientist</span>
                <span>2020–2021</span>
              </h5>

              <h5
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
              >
                <span>Senior Data Scientist</span>
                <span>2018–2020</span>
              </h5>

              <p>Used machine learning to help democrats win elections.</p>
            </VerticalTimelineElement>

            {/* 3) US Census — LEFT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position="right"
              contentStyle={makeCardStyle("#066464")}
              contentArrowStyle={makeArrowStyle("#066464")}
              date="2017"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <img
                src={require("../../assets/img/census_logo_clean.png")}
                alt="U.S. Census Bureau"
                style={{
                  display: "block",
                  width: "150px",       // your intended default width
                  maxWidth: "100%",     // prevents overflow when card narrows
                  height: "auto",
                  marginBottom: "16px",
                  marginTop: "-4px",
                  objectFit: "contain", // keeps proportions perfect
                  boxSizing: "border-box"
                }}
              />

              <h5 className="vertical-timeline-element-subtitle">
                Survey Statistician Intern
              </h5>
              <p>
                Analysed Bayesian kriging methods on income-to-poverty ratios
                for public schools.
              </p>
            </VerticalTimelineElement>

            {/* 4) Michigan — RIGHT (education styling) */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              position="left"
              contentStyle={makeCardStyle("#0E284B")}
              contentArrowStyle={makeArrowStyle("#0E284B")}
              date="2016–2018"
              iconStyle={iconStyleEdu}
              icon={<SchoolIcon/>}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <img
                src={require("../../assets/img/michigan_logo_clean.png")}
                alt="University of Michigan"
                style={{
                  display: "block",
                  width: "475px",              // your preferred “normal” width
                  maxWidth: "100%",            // prevents overflow on small cards
                  height: "auto",
                  marginBottom: "16px",
                  marginTop: "-4px",
                  objectFit: "contain",        // ensures no distortion
                  boxSizing: "border-box"
                }}
              />

              <h5 className="vertical-timeline-element-subtitle">
                M.S. in Applied Statistics
              </h5>

              <p>Focused on Bayesian modeling, statistical inference, and predictive analytics.</p>
            </VerticalTimelineElement>

            {/* 5) OptionsHouse — LEFT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position="right"   // or "left" depending on your timeline flow
              contentStyle={makeCardStyle("#003D2E")}
              contentArrowStyle={makeArrowStyle("#003D2E")}
              date="2016"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <img
                src={require("../../assets/img/optionshouse_logo_clean.png")}
                alt="OptionsHouse"
                style={{
                  display: "block",
                  width: "275px",       // your intended default width
                  maxWidth: "100%",     // prevents overflow on narrower cards
                  height: "auto",
                  marginBottom: "16px",
                  marginTop: "-4px",
                  objectFit: "contain", // keeps proportions perfect
                  boxSizing: "border-box"
                }}
              />

              <h5 className="vertical-timeline-element-subtitle">
                Junior Business Intelligence Analyst
              </h5>
              <p>Modeled user trading behavior and customer segmentation.</p>
            </VerticalTimelineElement>

            {/* numberFire — RIGHT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position="left"
              contentStyle={makeCardStyle("#131313")}
              contentArrowStyle={makeArrowStyle("#131313")}
              date="Jun 2014 – Sep 2014"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <img
                src={require("../../assets/img/numberfire_logo_clean.png")}  // save your logo here
                alt="numberFire"
                style={{
                  display: "block",
                  width: "250px",         // wide logo; this feels balanced
                  maxWidth: "100%",       // prevents overflow on narrow cards
                  height: "auto",
                  marginBottom: "16px",
                  marginTop: "-4px",
                  objectFit: "contain",
                  boxSizing: "border-box"
                }}
              />

              <h5
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
              >
                <span>MLB Contributor</span>
              </h5>

              <p>Provided data-centric baseball content for the website.</p>
            </VerticalTimelineElement>

            {/* 0) STATS Perform — LEFT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position="right"
              contentStyle={makeCardStyle("#000000")} // black card to match logo
              contentArrowStyle={makeArrowStyle("#000000")}
              date="Jun 2013 – Sep 2013"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <img
                src={require("../../assets/img/stats_logo_clean.png")}
                alt="STATS Perform"
                style={{
                  display: "block",
                  width: "200px",      // visually matches your other logos
                  maxWidth: "100%",    // prevents overflow
                  height: "auto",
                  marginBottom: "16px",
                  marginTop: "-4px",
                  objectFit: "contain",
                  boxSizing: "border-box"
                }}
              />

              <h5
                className="vertical-timeline-element-subtitle"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}
              >
                <span>Operations Statistician</span>
              </h5>

              <p>Provided baseball pitch-type analysis for MLB and Japanese games.</p>
            </VerticalTimelineElement>

            {/* 6) Northwestern — RIGHT (education styling) */}
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                position="left"
                contentStyle={makeCardStyle("#4E2686")}
                contentArrowStyle={makeArrowStyle("#4E2686")}
                date="2011–2015"
                iconStyle={iconStyleEdu}
                icon={<SchoolIcon/>}
                onMouseEnter={liftIn}
                onMouseLeave={liftOut}
            >
              <img
                  src={require("../../assets/img/northwestern_logo_clean.png")}
                  alt="Northwestern University"
                  style={{
                    display: "block",
                    width: "300px",      // your intended default size
                    maxWidth: "100%",    // prevents overflow in narrow layouts
                    height: "auto",
                    marginBottom: "16px",
                    marginTop: "-4px",
                    objectFit: "contain", // keeps proportions clean
                    boxSizing: "border-box"
                  }}
              />

              <h5 className="vertical-timeline-element-subtitle">B.A.: Mathematics & Statistics
              </h5>
              <h6 className="vertical-timeline-element-subtitle">Minor: Computer
                Science
              </h6>
              <p>Studied the mathematical foundations that underpin modern statistical modeling and data analysis.</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{background: "rgb(16, 204, 82)", color: "#fff"}}
                icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Container>
      </Jumbotron>
    </section>
  );
};

export default Experience;
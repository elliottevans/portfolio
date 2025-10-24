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
              // Capital One gradient (navy → blue). No boxShadow here so your hover CSS still works.
              contentStyle={{
                background: "linear-gradient(135deg, #004879 0%, #0072C6 100%)",
                color: "#fff",
                borderRadius: "18px",
                border: "1px solid rgba(255,255,255,0.10)"
              }}
              // Arrow uses the first gradient color so it blends nicely
              contentArrowStyle={{ borderRight: "7px solid #004879" }}
              date="2021–Present"
              // Gradient icon to match the card
              iconStyle={{
                background: "linear-gradient(135deg, #004879, #00AEEF)",
                color: "#fff"
              }}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <h3 className="vertical-timeline-element-title">
                <b>Capital One</b>
              </h3>
              <h5 className="vertical-timeline-element-subtitle">Data Science Manager (2025–CURRENT)</h5>
              <h5 className="vertical-timeline-element-subtitle">Principal Data Scientist (2021–2025)</h5>
              <p>Developing models to stop fraudsters.</p>
            </VerticalTimelineElement>

            {/* 2) Civis — RIGHT */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                position="right"
                contentStyle={makeCardStyle(COLORS.work)}
              contentArrowStyle={makeArrowStyle(COLORS.workArrow)}
              date="2018-2021"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <h3 className="vertical-timeline-element-title">
                <b>Civis Analytics</b>
              </h3>
              <h5 className="vertical-timeline-element-subtitle">Staff Data Scientist (2020–2021)</h5>
              <h5 className="vertical-timeline-element-subtitle">Senior Data Scientist (2018–2020)</h5>
              <p>Used machine learning to help democrats win elections.</p>
            </VerticalTimelineElement>

            {/* 3) US Census — LEFT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position="left"
              contentStyle={makeCardStyle(COLORS.work)}
              contentArrowStyle={makeArrowStyle(COLORS.workArrow)}
              date="2017"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <h3 className="vertical-timeline-element-title">
                <b>US Census Bureau</b>
              </h3>
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
              position="right"
              contentStyle={makeCardStyle(COLORS.eduBg, COLORS.eduText)}
              contentArrowStyle={makeArrowStyle(COLORS.eduBg)}
              date="2016-2018"
              iconStyle={iconStyleEdu}
              icon={<SchoolIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <h3 className="vertical-timeline-element-title">
                <b>University of Michigan - Ann Arbor</b>
              </h3>
              <p>MS: Applied Statistics</p>
            </VerticalTimelineElement>

            {/* 5) OptionsHouse — LEFT */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              position="left"
              contentStyle={makeCardStyle(COLORS.work)}
              contentArrowStyle={makeArrowStyle(COLORS.workArrow)}
              date="2015–2016"
              iconStyle={iconStyleWork}
              icon={<WorkIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <h3 className="vertical-timeline-element-title">
                <b>OptionsHouse</b>
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Jr Business Intelligence Analyst
              </h5>
              <p>Modeled user trading behavior and customer segmentation.</p>
            </VerticalTimelineElement>

            {/* 6) Northwestern — RIGHT (education styling) */}
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              position="right"
              contentStyle={makeCardStyle("rgb(73,44,127)")}
              contentArrowStyle={makeArrowStyle("rgb(73,44,127)")}
              date="2011-2015"
              iconStyle={iconStyleEdu}
              icon={<SchoolIcon />}
              onMouseEnter={liftIn}
              onMouseLeave={liftOut}
            >
              <h3 className="vertical-timeline-element-title">
                <b>Northwestern University</b>
              </h3>
              <p>BA: Mathematics | BA: Statistics | Minor: Computer Science</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Container>
      </Jumbotron>
    </section>
  );
};

export default Experience;
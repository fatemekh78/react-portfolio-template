import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career & Education History</h1>
        <VerticalTimeline>
          
          {/* Milestone 1: Current Tech Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Sep 2024 - Aug 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Student (ICT)</h3>
            <h4 className="vertical-timeline-element-subtitle">Grit: lab (Mariehamn, Åland)</h4>
            <p>
              Engaged in an intensive, project-based coding program specializing in Go, Java (Spring Boot), microservices architecture, cloud-native deployments, and interactive JavaScript frameworks (Vue.js, Angular).
            </p>
          </VerticalTimelineElement>
          
          {/* Milestone 2: Translation Work */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2009 - Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Academic Translator (Freelance)</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote / Freelance</h4>
            <p>
              Translating, analyzing, and editing highly technical academic documentation, research papers, and peer-reviewed journals across diverse scientific disciplines.
            </p>
          </VerticalTimelineElement>

          {/* Milestone 3: Art Professional */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2003 - 2023"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Freelance Art & Drawing Professional</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote / Hybrid</h4>
            <p>
              Practiced professional-level fine art painting and drawing (Oil, Charcoal, Pencil, Soft Paste). Taught core visual fundamentals and technical skills via structured one-on-one mentorship.
            </p>
          </VerticalTimelineElement>

          {/* Milestone 4: Content Creation */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Digital Content Creator</h3>
            <h4 className="vertical-timeline-element-subtitle">Iran</h4>
            <p>
              Designed and deployed multi-format digital media materials for diverse business clients, successfully boosting audience conversion and direct community engagement.
            </p>
          </VerticalTimelineElement>

          {/* Milestone 5: Linguistics Degrees */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Completed Education"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">MA & BA in Applied Linguistics & Translation</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Kashan / PNU</h4>
            <p>
              Earned a Master of Arts in TESFL alongside a Bachelor of Arts in Language Interpretation and Translation, focusing heavily on analytical linguistics and foreign language methodologies.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
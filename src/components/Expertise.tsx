import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVuejs, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "Spring Boot",
    "Golang",
    "JavaScript",
    "TypeScript",
    "Angular",
    "Vue.js",
    "HTML",
    "CSS",
    "SQL",
    "MongoDB",
    "SQLite"
];

const labelsSecond = [
    "Git",
    "Docker",
    "Kafka",
    "Jenkins",
    "REST APIs",
    "GraphQL",
    "Microservices",
    "SonarQube"
];

const labelsThird = [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "NLP",
    "Data Mining",
    "NLTK",
    "spaCy"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faVuejs} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build robust, scalable applications from the ground up using Java (Spring Boot) and Golang for the backend, paired with modern JavaScript frameworks like Angular and Vue.js for the frontend.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Architecture</h3>
                    <p>I architect scalable microservices systems and implement CI/CD pipelines, code quality checks, and deployment automation to ensure smooth software delivery.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>AI & Machine Learning</h3>
                    <p>I engineer custom NLP pipelines, recommendation engines, and data scrapers to transform raw datasets into actionable intelligence using Python and modern data science libraries.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
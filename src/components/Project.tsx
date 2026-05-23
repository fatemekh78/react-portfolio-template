import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            
            {/* Project 1: buy-01 */}
            <div className="project">
                <a href="https://github.com/fatemekh78/buy-01" target="_blank" rel="noreferrer">
                    <img src={mock01} className="zoom" alt="buy-01 e-commerce mockup" width="100%"/>
                </a>
                <a href="https://github.com/fatemekh78/buy-01" target="_blank" rel="noreferrer">
                    <h2>buy-01 (E-commerce Microservices)</h2>
                </a>
                <p>Architected a scalable distributed backend utilizing Java (Spring Boot) and MongoDB alongside an Angular frontend. Integrated enterprise-grade microservice patterns including Service Discovery (Eureka) and message streaming (Kafka), fully validated through an automated CI/CD pipeline using Jenkins and SonarQube.</p>
            </div>

            {/* Project 2: Social Network */}
            <div className="project">
                <a href="https://github.com/fatemekh78/social-network" target="_blank" rel="noreferrer">
                    <img src={mock02} className="zoom" alt="social network project mockup" width="100%"/>
                </a>
                <a href="https://github.com/fatemekh78/social-network" target="_blank" rel="noreferrer">
                    <h2>Social Network Platform</h2>
                </a>
                <p>Built a fast, full-stack social networking web application combining a high-performance backend written in Golang with a responsive frontend built in Vue.js. Managed structural local application storage using SQLite database management and handled real-time notifications via WebSockets.</p>
            </div>

            {/* NEW Project 3: Real Time Forum */}
            <div className="project">
                <a href="https://github.com/fatemekh78/real-time-forum" target="_blank" rel="noreferrer">
                    <img src={mock05} className="zoom" alt="real time forum mockup" width="100%"/>
                </a>
                <a href="https://github.com/fatemekh78/real-time-forum" target="_blank" rel="noreferrer">
                    <h2>Real-Time Forum Engine</h2>
                </a>
                <p>Engineered a lightweight, high-concurrency web forum from scratch utilizing Golang and vanilla JavaScript. Leveraging WebSockets for instant private messaging, the system maximizes server efficiency by utilizing Go routines and native communication channels to manage thousands of concurrent connections safely.</p>
            </div>

            {/* Project 4: NLP Scrapper */}
            <div className="project">
                <a href="https://github.com/fatemekh78/NLP-Scrapper" target="_blank" rel="noreferrer">
                    <img src={mock03} className="zoom" alt="NLP scrapper mockup" width="100%"/>
                </a>
                <a href="https://github.com/fatemekh78/NLP-Scrapper" target="_blank" rel="noreferrer">
                    <h2>Automated NLP Scrapper</h2>
                </a>
                <p>Engineered an automated natural language processing pipeline in Python designed to scrape and transform raw RSS news feeds into structured risk intelligence data. Implemented Named Entity Recognition (NER), sentiment analysis, and built a custom scandal detection filter.</p>
            </div>

            {/* Project 5: Matrix Factorization */}
            <div className="project">
                <a href="https://github.com/fatemekh78/Matrix-Factorization" target="_blank" rel="noreferrer">
                    <img src={mock04} className="zoom" alt="matrix factorization mockup" width="100%"/>
                </a>
                <a href="https://github.com/fatemekh78/Matrix-Factorization" target="_blank" rel="noreferrer">
                    <h2>Matrix Factorization RecEngine</h2>
                </a>
                <p>Developed a collaborative filtering recommendation system in Python to handle highly sparse datasets (such as MovieLens). Leveraged mathematical computing techniques like Singular Value Decomposition (SVD) and Bayesian Probabilistic Matrix Factorization (PMF) to optimize prediction accuracy.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;
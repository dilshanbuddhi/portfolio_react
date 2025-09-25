import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";

export function Project() {
  return (
      <Container id="project">
        <h2>My Projects</h2>
        <div className="projects">

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/YourGitHub/SmallWorld" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmallWorld – Tourism Web Application</h3>
              <p>
                A web platform to explore tourist destinations, discover hotels, and connect with local guides. Includes real-time location updates and integrated payment gateway.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring Boot</li>
                <li>WebSocket</li>
                <li>Google Maps API</li>
                <li>PayHere</li>
                <li>API Gateway</li>
              </ul>
            </footer>
          </div>

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/YourGitHub/SmartParkingSystem" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Smart Parking System – Backend Service</h3>
              <p>
                A backend solution to manage parking slots efficiently using microservices architecture and Eureka service discovery.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Spring Boot</li>
                <li>Eureka Server</li>
                <li>Microservices</li>
                <li>REST APIs</li>
              </ul>
            </footer>
          </div>

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/YourGitHub/BookClub" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>BookClub – Book Sharing & Review Application</h3>
              <p>
                A social platform for readers to share, review, and explore books with full-stack MERN implementation and flexible MongoDB storage.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/YourGitHub/CineTrack" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CineTrack – Movie & Series Tracker (Mobile App)</h3>
              <p>
                Mobile application to track movies and TV series with Firebase authentication and Firestore cloud integration.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Firebase Firestore</li>
                <li>Firebase Storage</li>
                <li>Firebase Authentication</li>
              </ul>
            </footer>
          </div>

          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/YourGitHub/SmartElectionSystem" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Smart Election System – JavaFX Desktop Application</h3>
              <p>
                A secure election management system with QR code-based voter verification and dynamic result generation using MySQL.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>JavaFX</li>
                <li>JDBC</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>

        </div>
      </Container>
  );
}

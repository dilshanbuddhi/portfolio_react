import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import { motion, Variants } from "framer-motion"; // Ensure correct import

// Define animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animation for each child
    },
  },
};

const projectVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut", // Valid easing function
    },
  },
};

export function Project() {
  return (
      <Container id="project">
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }} // Replay on scroll
        >
          My Projects
        </motion.h2>
        <motion.div
            className="projects"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Replay when 20% of container is in view
        >
          {/* Project 1 */}
          <motion.div variants={projectVariants} viewport={{ once: false }}>
            <div className="project">
              <header>
                <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23ce6b"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a
                      href="https://github.com/YourGitHub/SmartParkingSystem"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Smart Parking System – Backend Service</h3>
                <p>
                  A backend solution to manage parking slots efficiently using
                  microservices architecture and Eureka service discovery.
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
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={projectVariants} viewport={{ once: false }}>
            <div className="project">
              <header>
                <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23ce6b"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a
                      href="https://github.com/YourGitHub/BookClub"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>BookClub – Book Sharing & Review Application</h3>
                <p>
                  A social platform for readers to share, review, and explore books
                  with full-stack MERN implementation and flexible MongoDB storage.
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
          </motion.div>

          {/* Project 3 */}
          <motion.div variants={projectVariants} viewport={{ once: false }}>
            <div className="project">
              <header>
                <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23ce6b"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a
                      href="https://github.com/YourGitHub/CineTrack"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>CineTrack – Movie & Series Tracker (Mobile App)</h3>
                <p>
                  Mobile application to track movies and TV series with Firebase
                  authentication and Firestore cloud integration.
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
          </motion.div>

          {/* Project 4 */}
          <motion.div variants={projectVariants} viewport={{ once: false }}>
            <div className="project">
              <header>
                <svg
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#23ce6b"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a
                      href="https://github.com/YourGitHub/SmartElectionSystem"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>Smart Election System – JavaFX Desktop Application</h3>
                <p>
                  A secure election management system with QR code-based voter
                  verification and dynamic result generation using MySQL.
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
          </motion.div>
        </motion.div>
      </Container>
  );
}
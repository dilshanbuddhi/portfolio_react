import { Container } from "./styles";
import { motion, Variants } from "framer-motion";
import myPhoto from "../../assets/WhatsApp Image 2025-09-19 at 10.30.30_a39e2455.jpg";
import java from "../../assets/java.svg";
import jsIcon from "../../assets/js-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import springIcon from "../../assets/Spring_Boot.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import bootstrapIcon from "../../assets/bootstrap-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import firebaseIcon from "../../assets/Firebase_Logo_(No_wordmark)_(2024-).svg";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: i * 0.08,
      ease: [0.4, 0, 0.2, 1]
    },
  }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function About() {
  const skills = [
    {src: java, alt: "Java", level: "Advanced"},
    {src: springIcon, alt: "Spring Boot", level: "Intermediate"},
    {src: jsIcon, alt: "JavaScript", level: "Advanced"},
    {src: reactIcon, alt: "React", level: "Intermediate"},
    {src: htmlIcon, alt: "HTML", level: "Advanced"},
    {src: cssIcon, alt: "CSS", level: "Advanced"},
    {src: bootstrapIcon, alt: "Bootstrap", level: "Intermediate"},
    {src: mysqlIcon, alt: "MySQL", level: "Intermediate"},
    {src: nodeIcon, alt: "Node.js", level: "Intermediate"},
    {src: firebaseIcon, alt: "Firebase", level: "Beginner"},
  ];

  return (
      <Container id="about">
        <div className="hero-section">
          <motion.div
              className="about-text"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.2}}
          >
            <motion.div className="section-header" variants={textVariants}>
              <div className="header-decoration">
                <span className="decoration-line"></span>
                <span className="decoration-dot"></span>
              </div>
              <h2>About Me</h2>
              <p className="section-subtitle">Get to know me better</p>
            </motion.div>

            <motion.div className="intro-card" variants={cardVariants}>
              <div className="card-icon">👨‍💻</div>
              <p className="intro-text">
                I'm a passionate and hardworking Software Engineering student at IJSE,
                with hands-on experience in developing, testing, and maintaining
                software applications. I love solving problems, learning new
                technologies, and building scalable software that meets real user needs.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
              className="about-image"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.3}}
          >
            <div className="image-container">
              <div className="image-backdrop"></div>
              <div className="image-border">
                <motion.img
                    src={myPhoto}
                    alt="My Profile"
                    className="profile-img"
                    whileHover={{scale: 1.05}}
                    transition={{duration: 0.3}}
                />
              </div>
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
              </div>
              <div className="stats-overlay">
                <div className="stat-item">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div className="education-section" variants={textVariants}>
          <div className="section-title">
            <span className="title-icon">🎓</span>
            <h3>Education Journey</h3>
          </div>

          <motion.div className="education-card" variants={cardVariants}>
            <div className="card-header">
              <div className="institution-info">
                <h4>Institute of Software Engineering (IJSE)</h4>
                <span className="duration">Aug 2023 – Present</span>
              </div>
              <div className="status-badge active">Current</div>
            </div>
            <ul className="skills-list">
              <li>
                <span className="list-icon">▹</span>
                Enterprise software development with Java, Spring Boot, JavaFX
              </li>
              <li>
                <span className="list-icon">▹</span>
                Dynamic UIs with React & Angular
              </li>
              <li>
                <span className="list-icon">▹</span>
                Database integration with MySQL & PostgreSQL
              </li>
              <li>
                <span className="list-icon">▹</span>
                Full-stack development using the MERN stack
              </li>
              <li>
                <span className="list-icon">▹</span>
                Version control & automation using Git, Docker, Maven
              </li>
            </ul>
          </motion.div>

          <motion.div className="education-card secondary" variants={cardVariants}>
            <div className="card-header">
              <div className="institution-info">
                <h4>Kaluthara Vidyalaya</h4>
                <span className="duration">2019 – 2022</span>
              </div>
              <div className="status-badge">Completed</div>
            </div>
            <p className="qualification">G.C.E. Advanced Level – Commerce Stream</p>
          </motion.div>
        </motion.div>

        <motion.div className="skills-section" variants={textVariants}>
          <div className="section-title">
            <span className="title-icon">⚡</span>
            <h3>Technical Arsenal</h3>
          </div>

          <motion.div
              className="hard-skills"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{once: false, amount: 0.3}}
          >
            {skills.map((skill, index) => (
                <motion.div
                    key={skill.alt}
                    className="hability"
                    custom={index}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.15,
                      y: -8,
                      transition: {duration: 0.2}
                    }}
                    whileTap={{scale: 0.95}}
                >
                  <div className="skill-icon-wrapper">
                    <img src={skill.src} alt={skill.alt}/>
                    <div className="skill-glow"></div>
                  </div>
                  <span className="skill-name">{skill.alt}</span>
                  <span className="skill-level">{skill.level}</span>
                </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
  );
}
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

// Define animation variants with proper typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children animations
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
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
    transition: { duration: 0.4, delay: i * 0.15, ease: "easeOut" }, // Slightly increased delay for smoother stagger
  }),
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export function About() {
  return (
      <Container id="about">
        <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Replay on scroll
        >
          <motion.h2 variants={textVariants}>About Me</motion.h2>
          <motion.p variants={textVariants}>
            I’m a passionate and hardworking Software Engineering student at IJSE,
            with hands-on experience in developing, testing, and maintaining
            software applications. I love solving problems, learning new
            technologies, and building scalable software that meets real user needs.
          </motion.p>

          <motion.div className="education" variants={textVariants}>
            <h3>Education:</h3>
            <h4>Institute of Software Engineering (IJSE)</h4>
            <p>Aug 2023 – Present</p>
            <ul>
              <li>Enterprise software development with Java, Spring Boot, JavaFX</li>
              <li>Dynamic UIs with React & Angular</li>
              <li>Database integration with MySQL & PostgreSQL</li>
              <li>
                Full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js)
              </li>
              <li>Version control & automation using Git, Docker, Maven</li>
            </ul>

            <h4>Kaluthara Vidyalaya</h4>
            <p>2019 – 2022 (G.C.E. Advanced Level – Commerce Stream)</p>
          </motion.div>

          <motion.h3 variants={textVariants}>Main Skills</motion.h3>
          <motion.div
              className="hard-skills"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }} // Replay on scroll
          >
            {[
              { src: java, alt: "Java" },
              { src: springIcon, alt: "Spring Boot" },
              { src: jsIcon, alt: "JavaScript" },
              { src: reactIcon, alt: "React" },
              { src: htmlIcon, alt: "HTML" },
              { src: cssIcon, alt: "CSS" },
              { src: bootstrapIcon, alt: "Bootstrap" },
              { src: mysqlIcon, alt: "MySQL" },
              { src: nodeIcon, alt: "Node.js" },
              { src: firebaseIcon, alt: "Firebase" },
            ].map((skill, index) => (
                <motion.div
                    key={skill.alt}
                    className="hability"
                    custom={index}
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }} // Add hover effect
                    viewport={{ once: false }}
                >
                  <img src={skill.src} alt={skill.alt} />
                </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} // Replay on scroll
            whileHover={{ scale: 1.05 }} // Subtle hover effect for image
        >
          <img src={myPhoto} alt="My Profile" className="profile-img" />
        </motion.div>
      </Container>
  );
}
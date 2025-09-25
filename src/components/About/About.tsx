import { Container } from "./styles";
import myPhoto from "../../assets/WhatsApp Image 2025-09-19 at 10.30.30_a39e2455.jpg"; // <-- oyage photo eka danna
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
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
      <Container id="about">
        <div className="about-text">
          <ScrollAnimation animateIn="fadeInLeft">
            <h2>About Me</h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={100}>
            <p>
              I’m a passionate and hardworking Software Engineering student at IJSE,
              with hands-on experience in developing, testing, and maintaining
              software applications. I love solving problems, learning new
              technologies, and building scalable software that meets real user needs.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={200}>
            <div className="education">
              <h3>Education:</h3>
              <h4>Institute of Software Engineering (IJSE)</h4>
              <p>Aug 2023 – Present</p>
              <br/>
              <ul>
                <li>Enterprise software development with Java, Spring Boot, JavaFX</li>
                <li>Dynamic UIs with React & Angular</li>
                <li>Database integration with MySQL & PostgreSQL</li>
                <li>Full-stack development using the MERN stack (MongoDB, Express.js, React, Node.js)</li>
                <li>Version control & automation using Git, Docker, Maven</li>
              </ul>


              <h4>Kaluthara Vidyalaya</h4>
              <p>2019 – 2022 (G.C.E. Advanced Level – Commerce Stream)</p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={300}>
            <h3>Main Skills</h3>
          </ScrollAnimation>

          <div className="hard-skills">
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={100}>
                <img src={java} alt="Java" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={110}>
                <img src={springIcon} alt="Spring Boot" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={120}>
                <img src={jsIcon} alt="JavaScript" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={130}>
                <img src={reactIcon} alt="React" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={140}>
                <img src={htmlIcon} alt="HTML" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={150}>
                <img src={cssIcon} alt="CSS" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={160}>
                <img src={bootstrapIcon} alt="Bootstrap" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={170}>
                <img src={mysqlIcon} alt="MySQL" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={180}>
                <img src={nodeIcon} alt="Node.js" />
              </ScrollAnimation>
            </div>
            <div className="hability">
              <ScrollAnimation animateIn="fadeInUp" delay={190}>
                <img src={firebaseIcon} alt="Firebase" />
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <div className="about-image">
          <ScrollAnimation animateIn="fadeInRight" delay={210}>
            <img src={myPhoto} alt="My Profile" className="profile-img" />
          </ScrollAnimation>
        </div>
      </Container>
  );
}

import { Container } from "./styles";
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

export function About() {
  return (
      <Container id="about">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I’m a passionate and hardworking Software Engineering student at IJSE,
            with hands-on experience in developing, testing, and maintaining
            software applications. I love solving problems, learning new
            technologies, and building scalable software that meets real user needs.
          </p>

          <div className="education">
            <h3>Education:</h3>
            <h4>Institute of Software Engineering (IJSE)</h4>
            <p>Aug 2023 – Present</p>
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

          <h3>Main Skills</h3>
          <div className="hard-skills">
            <div className="hability"><img src={java} alt="Java" /></div>
            <div className="hability"><img src={springIcon} alt="Spring Boot" /></div>
            <div className="hability"><img src={jsIcon} alt="JavaScript" /></div>
            <div className="hability"><img src={reactIcon} alt="React" /></div>
            <div className="hability"><img src={htmlIcon} alt="HTML" /></div>
            <div className="hability"><img src={cssIcon} alt="CSS" /></div>
            <div className="hability"><img src={bootstrapIcon} alt="Bootstrap" /></div>
            <div className="hability"><img src={mysqlIcon} alt="MySQL" /></div>
            <div className="hability"><img src={nodeIcon} alt="Node.js" /></div>
            <div className="hability"><img src={firebaseIcon} alt="Firebase" /></div>
          </div>
        </div>

        <div className="about-image">
          <img src={myPhoto} alt="My Profile" className="profile-img" />
        </div>
      </Container>
  );
}

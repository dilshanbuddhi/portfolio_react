import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Container id="home" className={isVisible ? "animate-in" : ""}>
        <div className="hero-text">
          <div className="greeting-wrapper">
            <p className="greeting">
              Hello <img src={Hello} alt="Hello" width="20px" />
            </p>
            <div className="status-badge">
              <span className="status-dot"></span>
              Available for work
            </div>
          </div>

          <h1 className="name">
            Buddhi Dilshan
            <span className="name-underline"></span>
          </h1>

          <div className="title-wrapper">
            <h3 className="title">Software Engineer</h3>
            <div className="experience-tag">Full Stack Developer</div>
          </div>

          <p className="small-resume">
            Passionate about creating elegant solutions to complex problems.
            Specializing in modern web technologies and innovative software development.
          </p>

          <div className="button-container">
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="contact_btn">
                <span>Let's Connect</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavHashLink>
            </BrowserRouter>

            <div className="social-media">
              <a
                  href="https://www.linkedin.com/in/buddhi-dilshan-411557319"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="social-link"
              >
                <img src={linkedin} alt="LinkedIn" />
                <span className="social-tooltip">LinkedIn</span>
              </a>
              <a
                  href="https://github.com/dilshanbuddhi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="social-link"
              >
                <img src={githubIcon} alt="GitHub" />
                <span className="social-tooltip">GitHub</span>
              </a>
              <a
                  href="https://api.whatsapp.com/send?phone=94782960721&text=Hello+Dilshan+I+found+your+contact+through+portfolio+site"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Contact"
                  className="social-link"
              >
                <img src={whatsapp} alt="WhatsApp" />
                <span className="social-tooltip">WhatsApp</span>
              </a>
              <a
                  href="https://t.me/Dilshan12800"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram Contact"
                  className="social-link"
              >
                <img src={telegram} alt="Telegram" />
                <span className="social-tooltip">Telegram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-backdrop"></div>
          <img src={Illustration} alt="Developer Illustration" />
          <div className="floating-elements">
            <div className="float-circle circle-1"></div>
            <div className="float-circle circle-2"></div>
            <div className="float-circle circle-3"></div>
          </div>
        </div>
      </Container>
  );
}
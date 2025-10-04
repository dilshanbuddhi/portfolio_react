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
          <p className="greeting">
            Hello <img src={Hello} alt="Hello" width="20px" />
          </p>
          <h1 className="name">Buddhi Dilshan</h1>
          <h3 className="title">Software Engineer</h3>
          <p className="small-resume">1 Year Experience</p>
          <div className="button-container">
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="contact_btn">
                Contact Me
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
              </a>
              <a
                  href="https://github.com/dilshanbuddhi/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="social-link"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                  href="https://api.whatsapp.com/send?phone=94782960721&text=Hello+Dilshan+I+found+your+contact+through+portfolio+site"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Contact"
                  className="social-link"
              >
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a
                  href="https://t.me/Dilshan12800"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram Contact"
                  className="social-link"
              >
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src={Illustration} alt="Developer Illustration" />
        </div>
      </Container>
  );
}
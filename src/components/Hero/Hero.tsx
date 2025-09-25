
// Hero Component
import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import ScrollAnimation from "react-animate-on-scroll"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'

export function Hero() {
  return (
      <Container id="home">
        <div className="hero-text">
          <ScrollAnimation animateIn="fadeInUp">
            <p>Hello <img src={Hello} alt="Hello" width="20px"/>, I'm</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
            <h1>Buddhi Dilshan</h1>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
            <h3>Software Engineer</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
            <p className="small-resume">1 Year Experience</p>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
            <BrowserRouter>
              <NavHashLink smooth to="#contact" className="button">
                Contact Me
              </NavHashLink>
            </BrowserRouter>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
            <div className="social-media">
              <a
                  href="https://www.linkedin.com/in/codevinayak"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
              >
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a
                  href="https://github.com/CodeVinayak/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                  href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp Contact"
              >
                <img src={whatsapp} alt="WhatsApp" />
              </a>
              <a
                  href="https://t.me/CodeVinayak"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Telegram Contact"
              >
                <img src={telegram} alt="Telegram" />
              </a>
            </div>
          </ScrollAnimation>
        </div>
        <div className="hero-image">
          <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
            <img src={Illustration} alt="Developer Illustration" />
          </ScrollAnimation>
        </div>
      </Container>
  )
}
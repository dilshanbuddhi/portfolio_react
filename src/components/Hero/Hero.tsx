import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
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
          <p>Hello <img src={Hello} alt="Hello" width="20px"/></p>
          <h1>Buddhi Dilshan</h1>
          <h3>Software Engineer</h3>
          <p className="small-resume">1 Year Experience</p>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button">
              Contact Me
            </NavHashLink>
          </BrowserRouter>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/codevinayak" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/CodeVinayak/" target="_blank" rel="noreferrer" aria-label="GitHub Profile">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A" target="_blank" rel="noreferrer" aria-label="WhatsApp Contact">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer" aria-label="Telegram Contact">
              <img src={telegram} alt="Telegram" />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={Illustration} alt="Developer Illustration" />
        </div>
      </Container>
  )
}

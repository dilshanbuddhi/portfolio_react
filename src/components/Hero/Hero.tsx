import { BrowserRouter } from "react-router-dom"
import { Container } from "./styles"
import Illustration from "../../assets/illustration.svg"
import { NavHashLink } from "react-router-hash-link"
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Hello from '../../assets/Hello.gif'
import telegram from '../../assets/telegram.svg'
import { useEffect, useState } from 'react'
import { motion, Variants } from "framer-motion";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Trigger animations when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animations for children
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

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, delay: i * 0.1, ease: "easeOut" },
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

  return (
      <Container id="home" className={isVisible ? 'animate-in' : ''}>
        <div className="hero-text">
          <p className="greeting">
            Hello <img src={Hello} alt="Hello" width="20px"/>
          </p>
          <h1 className="name">Buddhi Dilshan</h1>
          <h3 className="title">Software Engineer</h3>
          <p className="small-resume">1 Year Experience</p>
          <BrowserRouter >
            <NavHashLink smooth to="#contact" className="button" style={{ marginTop: "20px" }}>
              Contact Me
            </NavHashLink>
          </BrowserRouter>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/codevinayak" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile" className="social-link">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/CodeVinayak/" target="_blank" rel="noreferrer" aria-label="GitHub Profile" className="social-link">
              <img src={githubIcon} alt="GitHub" />
            </a>
            <a href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak+I+found+your+contact+through+portfolio+site.%0A%0A" target="_blank" rel="noreferrer" aria-label="WhatsApp Contact" className="social-link">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="https://t.me/CodeVinayak" target="_blank" rel="noreferrer" aria-label="Telegram Contact" className="social-link">
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
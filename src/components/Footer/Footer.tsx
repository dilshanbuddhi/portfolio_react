import { Container } from './styles'
import reactIcon from '../../assets/react-icon.svg'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import telegram from '../../assets/telegram.svg'
import instagramIcon from '../../assets/instagram.svg'

export function Footer() {
    return (
        <Container className="footer">
            <a href="/" className="logo">
                <span>www.dilshan</span>
                <span>buddhi.lk</span>
            </a>

            <div>
                <p>
                    This Website was made with <img src={reactIcon} alt="React" />
                </p>
            </div>
            <div className="social-media">
                <a
                    href="https://www.linkedin.com/in/your-linkedin-username"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={linkedin} alt="Linkedin" />
                </a>
                <a
                    href="https://github.com/your-github-username"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                    href="https://api.whatsapp.com/send/?phone=%2B94782960721&text=Hello+Dilshan,+I+found+your+contact+through+portfolio+site."
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={whatsapp} alt="Whatsapp" />
                </a>
                <a
                    href="https://t.me/your-telegram-username"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={telegram} alt="telegram" />
                </a>
                <a
                    href="https://www.instagram.com/your-instagram-username"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
        </Container>
    )
}

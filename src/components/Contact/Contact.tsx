import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";

export function Contact() {
    return (
        <Container id="contact">
            <header>
                <h2>Contact</h2>
                <p>Ready to get started on your project?</p>
                <p>Contact me now for a Free consultation.</p>
            </header>

            <div className="contacts">
                <div>
                    <strong>Address: </strong>
                    <span>No. 91, Kumarakanda, Maggona, Kaluthara</span>
                </div>
                <div>
                    <a href="mailto:dilshanbuddhi40@gmail.com">
                        <img src={emailIcon} alt="Email" />
                    </a>
                    <a href="mailto:dilshanbuddhi40@gmail.com">
                        dilshanbuddhi40@gmail.com
                    </a>
                </div>
                <div>
                    <a href="tel:+94782960721">
                        <img src={phoneIcon} alt="Phone No" />
                    </a>
                    <a href="tel:+94782960721">(+94) 78 296 0721</a>
                </div>
            </div>

            <Form />
        </Container>
    );
}

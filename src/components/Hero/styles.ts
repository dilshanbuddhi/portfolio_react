import styled from "styled-components";

export const Container = styled.section`
    padding-top: 15%;
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    background: rgba(0, 0, 0, 0);

    .hero-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & > p {
            font-size: 1.8rem;
        }

        h1 {
            font-size: 7rem;
        }

        h3 {
            color: var(--green);
            margin: 1rem 0;
        }

        p.small-resume {
            margin-bottom: 2rem;
        }

        .button-container {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-top: 1rem;

            .contact_btn {
                border: none;
                cursor: pointer;
                background-color: var(--green);
                color: #FFFF;
                border-radius: 2rem;
                font-weight: 500;
                transition: filter 0.25s;
                padding: 1.2rem 4rem;
                text-decoration: none;

                &:hover {
                    filter: brightness(0.8);
                }
            }

            .social-media {
                display: flex;
                align-items: center;
                gap: 1rem;

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    img {
                        width: 4rem;
                        height: 4rem;
                        transition: filter 0.25s;

                        &:hover {
                            filter: brightness(0.8);
                        }
                    }
                }
            }
        }
    }

    .hero-image {
        img {
            max-width: 500px;
        }
    }

    /* Animation styles */
    .hero-text .greeting,
    .hero-text .name,
    .hero-text .title,
    .hero-text .small-resume,
    .hero-text .button-container,
    .hero-text .social-media .social-link,
    .hero-image img {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-text .name {
        transform: translateY(50px) scale(0.9);
    }

    .hero-text .social-media .social-link {
        transform: translateY(20px) scale(0.8);
    }

    .hero-image img {
        transform: translateX(50px) scale(0.9);
    }

    &.animate-in .hero-text .greeting {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
    }

    &.animate-in .hero-text .name {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 0.4s;
    }

    &.animate-in .hero-text .title {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.6s;
    }

    &.animate-in .hero-text .small-resume {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.8s;
    }

    &.animate-in .hero-text .button-container {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 1s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(1) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.1s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(2) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.2s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(3) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.3s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(4) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.4s;
    }

    &.animate-in .hero-image img {
        opacity: 1;
        transform: translateX(0) scale(1);
        transition-delay: 0.8s;
    }

    .hero-text .name {
        background: linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: gradientShift 4s ease-in-out infinite;
    }

    @keyframes gradientShift {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    &.animate-in .hero-image img {
        animation: breathe 4s ease-in-out infinite;
        animation-delay: 2s;
    }

    @keyframes breathe {
        0%,
        100% {
            transform: translateX(0) scale(1);
        }
        50% {
            transform: translateX(0) scale(1.02);
        }
    }

    /* Responsive styles */
    @media (max-width: 960px) {
        display: block;
        margin-top: 15%;
        padding: 2rem;

        .hero-text {
            h1 {
                font-size: 5rem;
            }

            .button-container {
                flex-direction: row;
                align-items: center;
                gap: 1.5rem;

                .contact_btn {
                    padding: 1rem 3rem;
                }

                .social-media {
                    gap: 0.8rem;

                    .social-link img {
                        width: 3rem;
                        height: 3rem;
                    }
                }
            }
        }

        .hero-image {
            display: none;
        }
    }

    @media (max-width: 600px) {
        margin-top: 35%;
        padding: 1.5rem;

        .hero-text {
            h1 {
                font-size: 3.5rem;
            }

            & > p {
                font-size: 1.5rem;
            }

            .button-container {
                gap: 1rem;

                .contact_btn {
                    padding: 1.3rem 2.5rem;
                    font-size: 1.5rem;
                }

                .social-media .social-link img {
                    width: 3.5rem;
                    height: 3.5rem;
                }
            }
        }
    }

    @media (max-width: 480px) {
        margin-top: 45%;
        padding: 1rem;

        .hero-text {
            h1 {
                font-size: 2.8rem;
            }

            & > p {
                font-size: 1.2rem;
            }

            .button-container {
                gap: 0.8rem;

                .contact_btn {
                    padding: 1.2rem 2rem;
                    font-size: 1.2rem;
                }

                .social-media .social-link img {
                    width: 2.8rem;
                    height: 2.8rem;
                }
            }
        }
    }
`;
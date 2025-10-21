import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh;
    padding-top: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
    background: rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        top: -50%;
        right: -20%;
        width: 60%;
        height: 120%;
        background: radial-gradient(circle, rgba(35, 206, 107, 0.03) 0%, transparent 70%);
        pointer-events: none;
        z-index: 0;
    }

    .hero-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 1;
        max-width: 650px;

        .greeting-wrapper {
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-bottom: 1.5rem;

            .greeting {
                font-size: 1.8rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                gap: 0.8rem;
                color: #a0a0a0;
            }

            .status-badge {
                display: flex;
                align-items: center;
                gap: 0.6rem;
                padding: 0.6rem 1.4rem;
                background: rgba(35, 206, 107, 0.1);
                border: 1px solid rgba(35, 206, 107, 0.3);
                border-radius: 2rem;
                font-size: 1.3rem;
                font-weight: 500;
                color: var(--green);

                .status-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--green);
                    border-radius: 50%;
                    animation: pulse 2s ease-in-out infinite;
                }
            }
        }

        h1.name {
            font-size: 7rem;
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;
            background: linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 200%;
            animation: gradientShift 4s ease-in-out infinite;

            .name-underline {
                position: absolute;
                bottom: -8px;
                left: 0;
                width: 0;
                height: 4px;
                background: var(--green);
                border-radius: 2px;
                transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
            }
        }

        &.animate-in .name .name-underline {
            width: 180px;
        }

        .title-wrapper {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;

            h3.title {
                font-size: 2.8rem;
                font-weight: 600;
                color: #ffffff;
                position: relative;

                &::before {
                    content: "⚡";
                    position: absolute;
                    left: -2.5rem;
                    animation: bounce 2s ease-in-out infinite;
                }
            }

            .experience-tag {
                padding: 0.5rem 1.2rem;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 1rem;
                font-size: 1.3rem;
                font-weight: 500;
                color: #a0a0a0;
                backdrop-filter: blur(10px);
            }
        }

        p.small-resume {
            font-size: 1.7rem;
            line-height: 1.7;
            color: #b0b0b0;
            margin-bottom: 3rem;
            max-width: 550px;
        }

        .button-container {
            display: flex;
            align-items: center;
            gap: 2.5rem;
            flex-wrap: wrap;

            .contact_btn {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                border: none;
                cursor: pointer;
                background: linear-gradient(135deg, var(--green) 0%, #1fb860 100%);
                color: #FFFF;
                border-radius: 3rem;
                font-weight: 600;
                font-size: 1.6rem;
                transition: all 0.3s ease;
                padding: 1.4rem 3rem;
                text-decoration: none;
                box-shadow: 0 4px 15px rgba(35, 206, 107, 0.3);
                position: relative;
                overflow: hidden;

                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s;
                }

                &:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(35, 206, 107, 0.4);

                    &::before {
                        left: 100%;
                    }

                    svg {
                        transform: translateX(5px);
                    }
                }

                svg {
                    transition: transform 0.3s ease;
                }
            }

            .social-media {
                display: flex;
                align-items: center;
                gap: 1.2rem;

                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 5rem;
                    height: 5rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 50%;
                    transition: all 0.3s ease;
                    position: relative;
                    backdrop-filter: blur(10px);

                    img {
                        width: 2.4rem;
                        height: 2.4rem;
                        transition: transform 0.3s ease;
                        filter: brightness(0.9);
                    }

                    .social-tooltip {
                        position: absolute;
                        bottom: -3.5rem;
                        left: 50%;
                        transform: translateX(-50%) scale(0);
                        background: rgba(0, 0, 0, 0.9);
                        color: white;
                        padding: 0.5rem 1rem;
                        border-radius: 0.5rem;
                        font-size: 1.2rem;
                        white-space: nowrap;
                        transition: all 0.3s ease;
                        opacity: 0;
                        pointer-events: none;
                    }

                    &:hover {
                        background: rgba(35, 206, 107, 0.1);
                        border-color: var(--green);
                        transform: translateY(-5px);

                        img {
                            transform: scale(1.1);
                            filter: brightness(1.2);
                        }

                        .social-tooltip {
                            transform: translateX(-50%) scale(1);
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }

    .hero-image {
        position: relative;
        z-index: 1;

        .image-backdrop {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 120%;
            height: 120%;
            background: radial-gradient(circle, rgba(35, 206, 107, 0.08) 0%, transparent 70%);
            border-radius: 50%;
            filter: blur(40px);
            z-index: -1;
        }

        img {
            max-width: 500px;
            filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
        }

        .floating-elements {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;

            .float-circle {
                position: absolute;
                border-radius: 50%;
                background: rgba(35, 206, 107, 0.1);
                border: 1px solid rgba(35, 206, 107, 0.2);

                &.circle-1 {
                    width: 80px;
                    height: 80px;
                    top: 10%;
                    right: 10%;
                    animation: float 6s ease-in-out infinite;
                }

                &.circle-2 {
                    width: 50px;
                    height: 50px;
                    bottom: 20%;
                    left: 5%;
                    animation: float 8s ease-in-out infinite;
                    animation-delay: 1s;
                }

                &.circle-3 {
                    width: 60px;
                    height: 60px;
                    top: 50%;
                    right: 5%;
                    animation: float 7s ease-in-out infinite;
                    animation-delay: 2s;
                }
            }
        }
    }

    /* Animations */
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.6;
            transform: scale(1.2);
        }
    }

    @keyframes gradientShift {
        0%, 100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-5px);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
        }
    }

    /* Entry animations */
    .hero-text .greeting-wrapper,
    .hero-text .name,
    .hero-text .title-wrapper,
    .hero-text .small-resume,
    .hero-text .button-container,
    .hero-image img,
    .hero-image .floating-elements .float-circle {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-text .name {
        transform: translateY(50px) scale(0.9);
    }

    .hero-image img {
        transform: translateX(50px) scale(0.9);
    }

    &.animate-in .hero-text .greeting-wrapper {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 0.2s;
    }

    &.animate-in .hero-text .name {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 0.4s;
    }

    &.animate-in .hero-text .title-wrapper {
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

    &.animate-in .hero-image img {
        opacity: 1;
        transform: translateX(0) scale(1);
        transition-delay: 0.8s;
        animation: breathe 4s ease-in-out infinite;
        animation-delay: 2s;
    }

    &.animate-in .hero-image .floating-elements .float-circle {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 1.2s;
    }

    @keyframes breathe {
        0%, 100% {
            transform: translateX(0) scale(1);
        }
        50% {
            transform: translateX(0) scale(1.02);
        }
    }

    /* Responsive styles */
    @media (max-width: 960px) {
        padding: 4rem 2rem;
        min-height: auto;
        flex-direction: column;
        gap: 4rem;

        &::before {
            display: none;
        }

        .hero-text {
            max-width: 100%;

            h1.name {
                font-size: 5rem;
            }

            .title-wrapper h3.title {
                font-size: 2.2rem;
            }

            .button-container {
                width: 100%;
                justify-content: flex-start;
            }
        }

        .hero-image {
            display: none;
        }
    }

    @media (max-width: 600px) {
        padding: 3rem 1.5rem;

        .hero-text {
            .greeting-wrapper {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }

            h1.name {
                font-size: 4rem;
            }

            .title-wrapper {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;

                h3.title {
                    font-size: 2rem;

                    &::before {
                        left: -2rem;
                    }
                }
            }

            p.small-resume {
                font-size: 1.5rem;
            }

            .button-container {
                flex-direction: column;
                align-items: flex-start;
                width: 100%;
                gap: 2rem;

                .contact_btn {
                    width: 100%;
                    justify-content: center;
                    padding: 1.5rem 2rem;
                }

                .social-media {
                    width: 100%;
                    justify-content: space-between;

                    .social-link {
                        width: 4.5rem;
                        height: 4.5rem;

                        img {
                            width: 2.2rem;
                            height: 2.2rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        .hero-text {
            h1.name {
                font-size: 3.2rem;
            }

            .title-wrapper h3.title {
                font-size: 1.8rem;
            }

            p.small-resume {
                font-size: 1.4rem;
            }
        }
    }
`;
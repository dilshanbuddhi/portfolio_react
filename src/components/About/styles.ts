import styled from "styled-components";

export const Container = styled.section`
    margin-top: 12rem;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    position: relative;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 2rem;

    &::before {
        content: "";
        position: absolute;
        top: -5%;
        left: -10%;
        width: 40%;
        height: 100%;
        background: radial-gradient(circle, rgba(35, 206, 107, 0.03) 0%, transparent 70%);
        pointer-events: none;
        z-index: -1;
    }

    .hero-section {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6rem;
        align-items: start;
    }

    .about-text {
        .section-header {
            margin-bottom: 3rem;
            position: relative;

            .header-decoration {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                margin-bottom: 1rem;

                .decoration-line {
                    width: 60px;
                    height: 3px;
                    background: linear-gradient(90deg, var(--green), transparent);
                    border-radius: 2px;
                }

                .decoration-dot {
                    width: 8px;
                    height: 8px;
                    background: var(--green);
                    border-radius: 50%;
                    box-shadow: 0 0 10px var(--green);
                    animation: pulse 2s ease-in-out infinite;
                }
            }

            h2 {
                font-size: 4.5rem;
                font-weight: 800;
                margin: 0;
                background: linear-gradient(135deg, var(--green), #1fb860);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                line-height: 1.2;
            }

            .section-subtitle {
                font-size: 1.6rem;
                color: #888;
                margin-top: 0.5rem;
                font-weight: 400;
            }
        }

        .intro-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 2rem;
            padding: 2.5rem;
            margin-bottom: 3rem;
            backdrop-filter: blur(10px);
            position: relative;
            overflow: hidden;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, rgba(35, 206, 107, 0.05) 0%, transparent 50%);
                pointer-events: none;
            }

            .card-icon {
                font-size: 3.5rem;
                margin-bottom: 1.5rem;
                filter: drop-shadow(0 0 10px rgba(35, 206, 107, 0.3));
            }

            .intro-text {
                font-size: 1.7rem;
                line-height: 1.8;
                color: #b0b0b0;
                font-weight: 400;
                margin: 0;
            }
        }
    }

    .education-section,
    .skills-section {
        margin-top: 4rem;

        .section-title {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 2rem;

            .title-icon {
                font-size: 2.8rem;
                filter: drop-shadow(0 0 8px rgba(35, 206, 107, 0.4));
            }

            h3 {
                font-size: 2.8rem;
                font-weight: 700;
                color: var(--green);
                margin: 0;
            }
        }

        .education-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-left: 3px solid var(--green);
            border-radius: 1.5rem;
            padding: 2rem 2.5rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
            position: relative;

            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 0;
                height: 100%;
                background: linear-gradient(90deg, rgba(35, 206, 107, 0.05), transparent);
                border-radius: 1.5rem;
                transition: width 0.4s ease;
                pointer-events: none;
            }

            &:hover {
                border-left-width: 5px;
                transform: translateX(5px);
                box-shadow: 0 8px 30px rgba(35, 206, 107, 0.1);

                &::before {
                    width: 100%;
                }
            }

            &.secondary {
                border-left-color: rgba(35, 206, 107, 0.5);

                &:hover {
                    border-left-color: var(--green);
                }
            }

            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                margin-bottom: 1.5rem;
                gap: 2rem;

                .institution-info {
                    flex: 1;

                    h4 {
                        font-size: 2rem;
                        font-weight: 600;
                        color: #fff;
                        margin: 0 0 0.5rem 0;
                    }

                    .duration {
                        font-size: 1.4rem;
                        color: #888;
                        font-weight: 500;
                    }
                }

                .status-badge {
                    padding: 0.6rem 1.4rem;
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 2rem;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #888;
                    white-space: nowrap;

                    &.active {
                        background: rgba(35, 206, 107, 0.1);
                        border-color: var(--green);
                        color: var(--green);
                        animation: pulse-badge 2s ease-in-out infinite;
                    }
                }
            }

            .skills-list {
                list-style: none;
                padding: 0;
                margin: 0;

                li {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    font-size: 1.6rem;
                    line-height: 1.8;
                    color: #b0b0b0;
                    margin-bottom: 1rem;
                    padding-left: 0.5rem;

                    .list-icon {
                        color: var(--green);
                        font-size: 1.8rem;
                        font-weight: bold;
                        line-height: 1.6;
                        flex-shrink: 0;
                    }

                    &:last-child {
                        margin-bottom: 0;
                    }
                }
            }

            .qualification {
                font-size: 1.6rem;
                color: #b0b0b0;
                margin: 0;
                font-weight: 500;
            }
        }
    }

    .hard-skills {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 2rem;
        margin-top: 2rem;

        .hability {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            padding: 2rem 1.5rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 1.5rem;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            backdrop-filter: blur(10px);

            .skill-icon-wrapper {
                position: relative;
                width: 5rem;
                height: 5rem;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 4rem;
                    height: 4rem;
                    object-fit: contain;
                    transition: all 0.3s ease;
                    position: relative;
                    z-index: 2;
                }

                .skill-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    height: 100%;
                    background: var(--green);
                    border-radius: 50%;
                    opacity: 0;
                    filter: blur(15px);
                    transition: opacity 0.3s ease;
                    z-index: 1;
                }
            }

            .skill-name {
                font-size: 1.4rem;
                font-weight: 600;
                color: #fff;
                text-align: center;
            }

            .skill-level {
                font-size: 1.1rem;
                font-weight: 500;
                color: #666;
                padding: 0.3rem 0.8rem;
                background: rgba(255, 255, 255, 0.03);
                border-radius: 1rem;
            }

            &:hover {
                background: rgba(255, 255, 255, 0.05);
                border-color: rgba(35, 206, 107, 0.5);
                box-shadow: 0 8px 25px rgba(35, 206, 107, 0.15);

                .skill-icon-wrapper {
                    .skill-glow {
                        opacity: 0.3;
                    }

                    img {
                        filter: drop-shadow(0 0 10px var(--green));
                    }
                }

                .skill-level {
                    color: var(--green);
                    background: rgba(35, 206, 107, 0.1);
                }
            }
        }
    }

    .about-image {
        position: sticky;
        top: 12rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .image-container {
            position: relative;
            width: 100%;
            max-width: 400px;

            .image-backdrop {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 120%;
                height: 120%;
                background: radial-gradient(circle, rgba(35, 206, 107, 0.15) 0%, transparent 70%);
                border-radius: 50%;
                filter: blur(40px);
                z-index: -1;
                animation: float 6s ease-in-out infinite;
            }

            .image-border {
                position: relative;
                padding: 1.5rem;
                background: linear-gradient(135deg, rgba(35, 206, 107, 0.2), rgba(31, 184, 96, 0.1));
                border-radius: 50%;
                box-shadow: 0 10px 40px rgba(35, 206, 107, 0.2);

                &::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 50%;
                    padding: 2px;
                    background: linear-gradient(135deg, var(--green), transparent);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    animation: rotate 8s linear infinite;
                }

                .profile-img {
                    border-radius: 50%;
                    width: 100%;
                    height: auto;
                    aspect-ratio: 1/1;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.3s ease;
                    position: relative;
                    z-index: 2;
                }
            }

            .floating-shapes {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;

                .shape {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(35, 206, 107, 0.1);
                    border: 1px solid rgba(35, 206, 107, 0.3);

                    &.shape-1 {
                        width: 60px;
                        height: 60px;
                        top: 5%;
                        right: -5%;
                        animation: float-shape 7s ease-in-out infinite;
                    }

                    &.shape-2 {
                        width: 40px;
                        height: 40px;
                        bottom: 15%;
                        left: -5%;
                        animation: float-shape 9s ease-in-out infinite;
                        animation-delay: 1s;
                    }

                    &.shape-3 {
                        width: 50px;
                        height: 50px;
                        top: 45%;
                        right: -8%;
                        animation: float-shape 8s ease-in-out infinite;
                        animation-delay: 2s;
                    }
                }
            }

            .stats-overlay {
                position: absolute;
                bottom: 2rem;
                left: 50%;
                transform: translateX(-50%);
                display: flex;
                gap: 1.5rem;
                z-index: 3;

                .stat-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 1rem 1.5rem;
                    background: rgba(0, 0, 0, 0.8);
                    border: 1px solid rgba(35, 206, 107, 0.3);
                    border-radius: 1.5rem;
                    backdrop-filter: blur(10px);
                    min-width: 80px;

                    .stat-number {
                        font-size: 2rem;
                        font-weight: 800;
                        color: var(--green);
                        line-height: 1;
                    }

                    .stat-label {
                        font-size: 1rem;
                        color: #888;
                        font-weight: 500;
                        margin-top: 0.3rem;
                        text-align: center;
                    }
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

    @keyframes pulse-badge {
        0%, 100% {
            box-shadow: 0 0 0 0 rgba(35, 206, 107, 0.4);
        }
        50% {
            box-shadow: 0 0 0 8px rgba(35, 206, 107, 0);
        }
    }

    @keyframes float {
        0%, 100% {
            transform: translate(-50%, -50%) translateY(0);
        }
        50% {
            transform: translate(-50%, -50%) translateY(-20px);
        }
    }

    @keyframes float-shape {
        0%, 100% {
            transform: translateY(0) rotate(0deg);
        }
        50% {
            transform: translateY(-20px) rotate(180deg);
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* Responsive styles */
    @media (max-width: 960px) {
        .hero-section {
            grid-template-columns: 1fr;
            gap: 4rem;
        }

        margin-top: 8rem;

        &::before {
            display: none;
        }

        .about-text {
            .section-header h2 {
                font-size: 3.5rem;
            }

            .hard-skills {
                grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
                gap: 1.5rem;
            }
        }

        .about-image {
            position: relative;
            top: 0;
            order: -1;

            .image-container {
                max-width: 350px;
            }
        }
    }

    @media (max-width: 768px) {
        margin-top: 6rem;
        padding: 0 1.5rem;

        .about-text {
            .section-header h2 {
                font-size: 3rem;
            }

            .intro-card {
                padding: 2rem;

                .card-icon {
                    font-size: 3rem;
                }

                .intro-text {
                    font-size: 1.6rem;
                }
            }

            .education-section,
            .skills-section {
                .section-title {
                    .title-icon {
                        font-size: 2.4rem;
                    }

                    h3 {
                        font-size: 2.4rem;
                    }
                }

                .education-card {
                    padding: 1.8rem 2rem;

                    .card-header {
                        flex-direction: column;
                        gap: 1rem;

                        .status-badge {
                            align-self: flex-start;
                        }
                    }

                    .skills-list li {
                        font-size: 1.5rem;
                    }
                }
            }

            .hard-skills {
                grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));

                .hability {
                    padding: 1.5rem 1rem;

                    .skill-icon-wrapper {
                        width: 4rem;
                        height: 4rem;

                        img {
                            width: 3.5rem;
                            height: 3.5rem;
                        }
                    }

                    .skill-name {
                        font-size: 1.3rem;
                    }
                }
            }
        }

        .about-image .image-container {
            max-width: 300px;

            .stats-overlay {
                bottom: 1rem;
                gap: 1rem;

                .stat-item {
                    padding: 0.8rem 1.2rem;
                    min-width: 70px;

                    .stat-number {
                        font-size: 1.8rem;
                    }

                    .stat-label {
                        font-size: 0.9rem;
                    }
                }
            }
        }
    }

    @media (max-width: 480px) {
        margin-top: 4rem;
        padding: 0 1rem;
        gap: 3rem;

        .about-text {
            .section-header {
                h2 {
                    font-size: 2.5rem;
                }

                .section-subtitle {
                    font-size: 1.4rem;
                }
            }

            .intro-card {
                padding: 1.5rem;

                .intro-text {
                    font-size: 1.4rem;
                }
            }

            .education-section,
            .skills-section {
                .section-title h3 {
                    font-size: 2rem;
                }

                .education-card {
                    padding: 1.5rem;

                    .card-header .institution-info h4 {
                        font-size: 1.7rem;
                    }

                    .skills-list li {
                        font-size: 1.4rem;
                    }
                }
            }

            .hard-skills {
                grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
                gap: 1rem;

                .hability {
                    padding: 1.2rem 0.8rem;

                    .skill-icon-wrapper {
                        width: 3.5rem;
                        height: 3.5rem;

                        img {
                            width: 3rem;
                            height: 3rem;
                        }
                    }

                    .skill-name {
                        font-size: 1.2rem;
                    }

                    .skill-level {
                        font-size: 1rem;
                    }
                }
            }
        }

        .about-image .image-container {
            max-width: 250px;

            .stats-overlay {
                bottom: 0.5rem;
                gap: 0.8rem;

                .stat-item {
                    padding: 0.6rem 1rem;
                    min-width: 60px;

                    .stat-number {
                        font-size: 1.6rem;
                    }

                    .stat-label {
                        font-size: 0.8rem;
                    }
                }
            }

            .floating-shapes .shape {
                &.shape-1 {
                    width: 40px;
                    height: 40px;
                }

                &.shape-2 {
                    width: 30px;
                    height: 30px;
                }

                &.shape-3 {
                    width: 35px;
                    height: 35px;
                }
            }
        }
    }
`;
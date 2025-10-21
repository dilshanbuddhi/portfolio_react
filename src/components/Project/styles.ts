import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15rem;
    padding: 0 2rem;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    
    h3{
        margin-bottom: 15px;
    }
    
    p{
        margin-bottom: 15px;
    }

    h2{
        text-align: center;
        font-size: 5rem;
        font-weight: 800;
        margin-bottom: 4rem;
        background: linear-gradient(135deg, var(--green), #1fb860);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -1rem;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, var(--green), transparent);
            border-radius: 2px;
        }
    }

    .projects-header {
        text-align: center;
        margin-bottom: 4rem;

        p {
            font-size: 1.8rem;
            color: #b0b0b0;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
    }

    .projects{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
        gap: 3rem;
        padding: 1rem;

        .project{
            padding: 2.5rem;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 2rem;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            flex-direction: column;
            height: 100%;
            color: #FFF;
            position: relative;
            overflow: hidden;
            backdrop-filter: blur(10px);

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(35, 206, 107, 0.1), transparent);
                transition: left 0.6s ease;
            }

            &:hover {
                transform: translateY(-12px);
                border-color: rgba(35, 206, 107, 0.4);
                box-shadow: 0 20px 40px rgba(35, 206, 107, 0.15);

                &::before {
                    left: 100%;
                }

                .project-image {
                    transform: scale(1.05);
                }
            }

            .project-image {
                width: 100%;
                height: 200px;
                background: linear-gradient(135deg, rgba(35, 206, 107, 0.1), rgba(31, 184, 96, 0.05));
                border-radius: 1rem;
                margin-bottom: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
                transition: transform 0.4s ease;

                .image-placeholder {
                    font-size: 4rem;
                    color: rgba(35, 206, 107, 0.3);
                }
            }

            header{
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                margin-bottom: 2rem;

                h3 {
                    font-size: 2.2rem;
                    font-weight: 700;
                    color: #fff;
                    margin: 0;
                    flex: 1;
                }

                .project-links{
                    display: flex;
                    align-items: center;
                    gap: 1rem;

                    a {
                        width: 4.5rem;
                        height: 4.5rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.1);
                        border-radius: 1rem;
                        transition: all 0.3s ease;

                        &:hover {
                            background: rgba(35, 206, 107, 0.1);
                            border-color: var(--green);
                            transform: translateY(-2px);

                            img {
                                filter: brightness(0) invert(1) drop-shadow(0 0 8px var(--green));
                            }
                        }

                        img {
                            width: 2.2rem;
                            height: 2.2rem;
                            transition: all 0.3s ease;
                        }
                    }
                }
            }

            .project-content {
                flex: 1;
                display: flex;
                flex-direction: column;

                p{
                    font-size: 1.6rem;
                    line-height: 1.7;
                    color: #b0b0b0;
                    margin-bottom: 2.5rem;
                    flex: 1;

                    a{
                        color: var(--green);
                        border-bottom: 1px solid transparent;
                        transition: all 0.3s ease;
                        font-weight: 600;

                        &:hover{
                            border-bottom-color: var(--green);
                        }
                    }
                }
            }

            footer{
                margin-top: auto;

                .tech-list{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 1.3rem;
                    flex-wrap: wrap;

                    li {
                        padding: 0.6rem 1.2rem;
                        background: rgba(35, 206, 107, 0.1);
                        border: 1px solid rgba(35, 206, 107, 0.2);
                        border-radius: 2rem;
                        color: var(--green);
                        font-weight: 500;
                        transition: all 0.3s ease;

                        &:hover {
                            background: rgba(35, 206, 107, 0.2);
                            transform: translateY(-2px);
                        }
                    }
                }
            }

            .project-badge {
                position: absolute;
                top: 2rem;
                right: 2rem;
                padding: 0.5rem 1.2rem;
                background: rgba(35, 206, 107, 0.15);
                border: 1px solid rgba(35, 206, 107, 0.3);
                border-radius: 2rem;
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--green);

                &.featured {
                    background: rgba(255, 193, 7, 0.15);
                    border-color: rgba(255, 193, 7, 0.3);
                    color: #ffc107;
                }
            }
        }
    }

    .projects-cta {
        text-align: center;
        margin-top: 5rem;

        p {
            font-size: 1.8rem;
            color: #b0b0b0;
            margin-bottom: 2rem;
        }

        .cta-button {
            display: inline-flex;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem 3rem;
            background: rgba(35, 206, 107, 0.1);
            border: 2px solid var(--green);
            border-radius: 1.5rem;
            color: var(--green);
            font-size: 1.6rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;

            &:hover {
                background: var(--green);
                color: #000;
                transform: translateY(-3px);
                box-shadow: 0 10px 25px rgba(35, 206, 107, 0.3);
            }
        }
    }

    /* Animation classes for scroll-triggered animations */
    .fade-in-up {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

        &.visible {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .stagger-item {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

        &.visible {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 1200px) {
        .projects {
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2.5rem;
        }
    }

    @media (max-width: 960px){
        margin-top: 12rem;
        padding: 0 1.5rem;

        h2{
            font-size: 4rem;
            margin-bottom: 3rem;
        }

        .projects-header p {
            font-size: 1.6rem;
        }

        .projects{
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            padding: 0.5rem;

            .project{
                padding: 2rem;

                header{
                    h3 {
                        font-size: 2rem;
                    }

                    .project-links a {
                        width: 4rem;
                        height: 4rem;

                        img {
                            width: 2rem;
                            height: 2rem;
                        }
                    }
                }

                .project-content p {
                    font-size: 1.5rem;
                }

                footer .tech-list {
                    font-size: 1.2rem;

                    li {
                        padding: 0.5rem 1rem;
                    }
                }
            }
        }
    }

    @media (max-width: 768px){
        margin-top: 10rem;

        h2{
            font-size: 3.5rem;
            margin-bottom: 2.5rem;
        }

        .projects{
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 0;

            .project{
                padding: 2.5rem 2rem;

                header{
                    flex-direction: column;
                    gap: 1.5rem;
                    align-items: flex-start;

                    h3 {
                        font-size: 2.2rem;
                    }

                    .project-links {
                        align-self: flex-end;
                    }
                }

                .project-image {
                    height: 180px;
                }
            }
        }

        .projects-cta {
            margin-top: 4rem;

            p {
                font-size: 1.6rem;
            }

            .cta-button {
                padding: 1.3rem 2.5rem;
                font-size: 1.5rem;
            }
        }
    }

    @media (max-width: 480px){
        margin-top: 8rem;
        padding: 0 1rem;

        h2{
            font-size: 3rem;
            margin-bottom: 2rem;
        }

        .projects-header p {
            font-size: 1.4rem;
        }

        .projects{
            gap: 1.5rem;

            .project{
                padding: 2rem 1.5rem;

                header{
                    h3 {
                        font-size: 1.9rem;
                    }

                    .project-links a {
                        width: 3.5rem;
                        height: 3.5rem;

                        img {
                            width: 1.8rem;
                            height: 1.8rem;
                        }
                    }
                }

                .project-image {
                    height: 160px;
                    margin-bottom: 1.5rem;
                }

                .project-content p {
                    font-size: 1.4rem;
                    margin-bottom: 2rem;
                }

                footer .tech-list {
                    gap: 0.8rem;
                    font-size: 1.1rem;

                    li {
                        padding: 0.4rem 0.9rem;
                    }
                }

                .project-badge {
                    top: 1.5rem;
                    right: 1.5rem;
                    font-size: 1rem;
                    padding: 0.4rem 1rem;
                }
            }
        }

        .projects-cta {
            margin-top: 3rem;

            p {
                font-size: 1.4rem;
                margin-bottom: 1.5rem;
            }

            .cta-button {
                padding: 1.2rem 2rem;
                font-size: 1.4rem;
            }
        }
    }

    @media (max-width: 320px){
        margin-top: 6rem;

        h2{
            font-size: 2.6rem;
        }

        .projects{
            .project{
                padding: 1.5rem 1.2rem;

                header h3 {
                    font-size: 1.7rem;
                }

                .project-content p {
                    font-size: 1.3rem;
                }

                footer .tech-list {
                    font-size: 1rem;

                    li {
                        padding: 0.3rem 0.8rem;
                    }
                }
            }
        }
    }
`;
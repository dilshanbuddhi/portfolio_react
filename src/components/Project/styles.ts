import styled from "styled-components";

export const Container = styled.section`
    margin-top: 15rem;

    h2{
        text-align: center;
        font-size: 4rem;
        margin-bottom: 3rem;
        opacity: 0;
        transform: translateY(30px);
        animation: fadeInUp 0.8s ease forwards;
    }

    .projects{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: auto;
        gap: 2rem;
        padding: 1rem;
        overflow: hidden;

        .project{
            padding: 2rem 1.8rem;
            background-color: #2b2b2b;
            border-radius: 1.2rem;
            transition: 0.25s;
            display: flex;
            flex-direction: column;
            height: 100%;
            color: #FFF;
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInUp 0.8s ease forwards;

            &:nth-child(1) { animation-delay: 0.1s; }
            &:nth-child(2) { animation-delay: 0.2s; }
            &:nth-child(3) { animation-delay: 0.3s; }
            &:nth-child(4) { animation-delay: 0.4s; }
            &:nth-child(5) { animation-delay: 0.5s; }
            &:nth-child(6) { animation-delay: 0.6s; }

            &:hover{
                transform: translateY(-5px);
                background-color: var(--pink);
            }

            header{
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: var(--blue);
                margin-bottom: 3.6rem;
                .project-links{
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                a > img {
                    width: 5.0rem;
                }
            }

            h3{
                margin-bottom: 2rem;
            }

            p{
                letter-spacing: 0.12rem;
                margin-bottom: 2rem;
                a{
                    color: #FFFF;
                    border-bottom: 1px solid var(--green);
                    transition: color 0.25s;
                    &:hover{
                        color: var(--green);
                    }
                }
            }

            footer{
                margin-top: auto;
                .tech-list{
                    display: flex;
                    align-items: center;
                    gap: 2rem;
                    font-size: 1.4rem;
                    opacity: 0.6;
                    flex-wrap: wrap;
                }
            }
        }
    }

    @keyframes fadeInUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 960px){
        margin-top: 10rem;

        h2{
            font-size: 3.5rem;
            margin-bottom: 2.5rem;
        }

        .projects{
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
            padding: 0.5rem;

            .project{
                padding: 1.8rem 1.5rem;

                header{
                    margin-bottom: 2.5rem;

                    a > img {
                        width: 4.5rem;
                    }
                }

                h3{
                    font-size: 1.6rem;
                    margin-bottom: 1.5rem;
                    line-height: 1.3;
                }

                p{
                    font-size: 1.3rem;
                    line-height: 1.4;
                    margin-bottom: 1.5rem;
                }

                footer{
                    .tech-list{
                        gap: 1.5rem;
                        font-size: 1.2rem;
                    }
                }
            }
        }
    }

    @media (max-width: 740px){
        margin-top: 8rem;

        h2{
            font-size: 3rem;
            margin-bottom: 2rem;
            padding: 0 1rem;
        }

        .projects{
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 0 1rem;

            .project{
                padding: 2rem 1.5rem;

                header{
                    margin-bottom: 2rem;

                    a > img {
                        width: 4rem;
                    }
                }

                h3{
                    font-size: 1.8rem;
                    margin-bottom: 1.5rem;
                }

                p{
                    font-size: 1.4rem;
                    line-height: 1.5;
                    margin-bottom: 2rem;
                }

                footer{
                    .tech-list{
                        gap: 1rem;
                        font-size: 1.3rem;
                        li{
                            padding: 0.3rem 0.8rem;
                            background-color: rgba(255, 255, 255, 0.1);
                            border-radius: 0.5rem;
                            white-space: nowrap;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 480px){
        margin-top: 6rem;

        h2{
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }

        .projects{
            gap: 1rem;

            .project{
                padding: 1.5rem 1.2rem;

                header{
                    margin-bottom: 1.5rem;

                    svg{
                        width: 40px;
                    }

                    a > img {
                        width: 3.5rem;
                    }
                }

                h3{
                    font-size: 1.6rem;
                    margin-bottom: 1rem;
                    line-height: 1.2;
                }

                p{
                    font-size: 1.3rem;
                    line-height: 1.4;
                    margin-bottom: 1.5rem;
                }

                footer{
                    .tech-list{
                        gap: 0.8rem;
                        font-size: 1.1rem;
                        li{
                            padding: 0.2rem 0.6rem;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 320px){
        h2{
            font-size: 2.2rem;
        }

        .projects{
            .project{
                padding: 1.2rem 1rem;

                h3{
                    font-size: 1.5rem;
                }

                p{
                    font-size: 1.2rem;
                }

                footer{
                    .tech-list{
                        font-size: 1rem;
                        li{
                            padding: 0.2rem 0.5rem;
                            font-size: 0.9rem;
                        }
                    }
                }
            }
        }
    }
`;
import styled from "styled-components";

export const Container = styled.section`
    margin-top: 12rem;
    padding: 0 2rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;

    .contact-header {
        text-align: center;
        margin-bottom: 6rem;

        h2 {
            font-size: 4rem;
            color: var(--green);
            margin-bottom: 1rem;
            position: relative;
            display: inline-block;

            &::after {
                content: '';
                position: absolute;
                bottom: -10px;
                left: 50%;
                transform: translateX(-50%);
                width: 60%;
                height: 4px;
                background: linear-gradient(90deg, transparent, var(--green), transparent);
                border-radius: 2px;
            }
        }

        p {
            font-size: 1.8rem;
            color: #a1a1aa;
            margin-top: 2rem;
        }
    }

    .contact-content {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4rem;
    }

    .contact-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;

        .info-card {
            background: linear-gradient(135deg, rgba(35, 206, 107, 0.1), rgba(35, 206, 107, 0.05));
            border: 1px solid rgba(35, 206, 107, 0.2);
            border-radius: 16px;
            padding: 3rem 2rem;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;

            &:hover {
                border-color: var(--green);
                box-shadow: 0 8px 32px rgba(35, 206, 107, 0.2);
            }

            .icon-wrapper {
                width: 60px;
                height: 60px;
                margin: 0 auto 1.5rem;
                background: var(--green);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--black);
                transition: transform 0.3s ease;

                svg {
                    stroke-width: 2.5;
                }
            }

            &:hover .icon-wrapper {
                transform: rotate(360deg);
            }

            h3 {
                color: var(--green);
                font-size: 2rem;
                margin-bottom: 1rem;
            }

            a, p {
                color: #e4e4e7;
                font-size: 1.6rem;
                text-decoration: none;
                transition: color 0.3s ease;
            }

            a:hover {
                color: var(--green);
            }
        }
    }

    .contact-form {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid rgba(35, 206, 107, 0.1);
        border-radius: 20px;
        padding: 4rem;
        backdrop-filter: blur(10px);

        .form-group {
            margin-bottom: 2.5rem;

            input, textarea {
                width: 100%;
                padding: 1.5rem 2rem;
                background: rgba(255, 255, 255, 0.05);
                border: 2px solid rgba(35, 206, 107, 0.2);
                border-radius: 12px;
                color: #FFFF;
                font-size: 1.6rem;
                transition: all 0.3s ease;

                &::placeholder {
                    color: #71717a;
                }

                &:focus {
                    outline: none;
                    border-color: var(--green);
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: 0 0 0 4px rgba(35, 206, 107, 0.1);
                }

                &:hover {
                    border-color: rgba(35, 206, 107, 0.4);
                }
            }

            textarea {
                resize: vertical;
                min-height: 150px;
                font-family: 'Red Hat Display', sans-serif;
            }
        }

        .submit-btn {
            width: 100%;
            padding: 1.8rem 3rem;
            font-size: 1.8rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background: var(--green);
            color: var(--black);
            border: none;
            border-radius: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 16px rgba(35, 206, 107, 0.3);

            &:hover {
                background: #1fb35f;
                box-shadow: 0 6px 24px rgba(35, 206, 107, 0.4);
                transform: translateY(-2px);
            }

            &:active {
                transform: translateY(0);
            }

            svg {
                transition: transform 0.3s ease;
            }

            &:hover svg {
                transform: translateX(5px);
            }
        }
    }

    /* Tablet styles */
    @media (max-width: 960px) {
        margin-top: 8rem;

        .contact-header {
            margin-bottom: 4rem;

            h2 {
                font-size: 3.5rem;
            }
        }

        .contact-form {
            padding: 3rem;
        }
    }

    /* Mobile styles */
    @media (max-width: 768px) {
        margin-top: 6rem;
        padding: 0 1.5rem;

        .contact-header {
            margin-bottom: 3rem;

            h2 {
                font-size: 3rem;
            }

            p {
                font-size: 1.6rem;
            }
        }

        .contact-info {
            grid-template-columns: 1fr;
            gap: 1.5rem;

            .info-card {
                padding: 2.5rem 2rem;

                .icon-wrapper {
                    width: 50px;
                    height: 50px;
                }
            }
        }

        .contact-form {
            padding: 2.5rem 2rem;
        }

        .contact-content {
            gap: 3rem;
        }
    }

    @media (max-width: 480px) {
        .contact-header {
            h2 {
                font-size: 2.5rem;
            }

            p {
                font-size: 1.4rem;
            }
        }

        .contact-form {
            padding: 2rem 1.5rem;

            .form-group {
                input, textarea {
                    padding: 1.2rem 1.5rem;
                    font-size: 1.4rem;
                }
            }

            .submit-btn {
                padding: 1.5rem 2.5rem;
                font-size: 1.6rem;
            }
        }
    }
`;
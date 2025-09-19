import styled from "styled-components";

export const Container = styled.section`
    margin-top: 12rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: start;

    .hard-skills{
        margin-top: 1.6rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.8rem;
    }

    .hability{
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 3.4rem;
        }
    }

    h2{
        display: inline-block;
        margin-bottom: 2rem;
        font-size: 3rem;
        margin-top: 0rem;
        color: var(--green);
    }

    h3{
        margin-top: 2rem;
        color: var(--green);
    }

    h4{
        color: var(--green);
        margin-top: 0.5rem;
    }

    p{
        font-size: 1.8rem;
        letter-spacing: 0.1rem;
        font-weight: 500;
    }

    .about-image{
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .profile-img{
            border-radius: 50%;
            width: 100%;
            max-width: 350px;
            height: auto;
            aspect-ratio: 1/1;
            object-fit: cover;
            filter: grayscale(0);
            transition: filter 0.5s, transform 0.3s;

            &:hover{
                filter: grayscale(0);
                transform: scale(1.05);
            }
        }
    }

    /* Tablet styles */
    @media (max-width: 960px){
        display: block;
        text-align: center;
        gap: 3rem;

        .hard-skills{
            justify-content: center;
        }

        .about-image{
            margin-top: 3rem;

            .profile-img{
                max-width: 300px;
            }
        }
    }

    /* Mobile styles */
    @media (max-width: 768px) {
        margin-top: 8rem;

        .about-image{
            .profile-img{
                max-width: 250px;
            }
        }

        h2{
            font-size: 2.5rem;
        }

        p{
            font-size: 1.6rem;
        }
    }

    @media (max-width: 480px) {
        margin-top: 6rem;

        .about-image{
            .profile-img{
                max-width: 200px;
            }
        }

        h2{
            font-size: 2.2rem;
        }

        p{
            font-size: 1.4rem;
        }

        .hability{
            img{
                width: 3rem;
            }
        }
    }
`;
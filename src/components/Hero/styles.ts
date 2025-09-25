import styled from "styled-components";

export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);
  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }
// New added
  .social-media{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top:5rem;
    padding-left:1rem;

    img,span{
      font-size: 3rem;
      width: 3.5rem;
    }
  }


  .button{
    margin-top: 1rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 35%;
  }
  @media(max-width: 480px){
    margin-top: 45%;
  }

    /* Add these styles to your existing Container styled component */

    /* Base animation states - elements start invisible */
    .hero-text .greeting,
    .hero-text .name,
    .hero-text .title,
    .hero-text .small-resume,
    .hero-text .button,
    .hero-text .social-media,
    .hero-image img {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-text .name {
        transform: translateY(50px) scale(0.9);
    }

    .hero-text .social-media .social-link {
        opacity: 0;
        transform: translateY(20px) scale(0.8);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .hero-image img {
        transform: translateX(50px) scale(0.9);
        opacity: 0;
    }

    /* Animated states when visible */
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

    &.animate-in .hero-text .button {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 1s;
    }

    &.animate-in .hero-text .social-media {
        opacity: 1;
        transform: translateY(0);
        transition-delay: 1.2s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(1) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.3s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(2) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.4s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(3) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.5s;
    }

    &.animate-in .hero-text .social-media .social-link:nth-child(4) {
        opacity: 1;
        transform: translateY(0) scale(1);
        transition-delay: 1.6s;
    }

    &.animate-in .hero-image img {
        opacity: 1;
        transform: translateX(0) scale(1);
        transition-delay: 0.8s;
    }

    /* Additional smooth animations */
    .hero-text .name {
        background: linear-gradient(135deg, #60a5fa, #a78bfa, #f59e0b);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: gradientShift 4s ease-in-out infinite;
    }

    @keyframes gradientShift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    /* Breathing animation for the image */
    &.animate-in .hero-image img {
        animation: breathe 4s ease-in-out infinite;
        animation-delay: 2s;
    }

    @keyframes breathe {
        0%, 100% { transform: translateX(0) scale(1); }
        50% { transform: translateX(0) scale(1.02); }
    }

    /* Mobile responsiveness for animations */
    @media (max-width: 768px) {
        .hero-image img {
            transform: translateY(30px) scale(0.9);
        }

        &.animate-in .hero-image img {
            transform: translateY(0) scale(1);
        }
    }
`




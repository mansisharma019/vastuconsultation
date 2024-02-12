import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection.jsx'
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "./styles/Button";


const Home = () => {
  
  return (
    <><Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">

          <h1 className="hero-heading">Vastu Consultation</h1>
          <p className="hero-top-data">By Acharya abc</p>
          <p className="hero-para">
            "Harmonize Your Space, Energize Your Life: Vastu Consultations for Positive Transformations."
          </p>
          <Button className="btn talk-btn">
            <NavLink to="/contact"> Talk with Acharya </NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src=".\img\home.png" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper><HeroSection />


    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">

          <h2 className="hero-heading">Vastu Compliance Check Online</h2>
          <p className="hero-para">
           Online Vastu Compliance check or Vastu Analysis is simple yet highly effective system that helps you to
           get the benefit of Vastu Shastra anywhere around the world. Getting the Vastu compliance check of your 
           property before investing is important to ensure that the energies of our space are pure & positive to
           support growth and prosperity. Our Vastu consultants leave no loose ends in adding the charm of Vastu Shastra
           to your home and take advantage of the expertise of pioneers in online Vastu consultancy services.
          </p>
          <Button className="btn talk-btn">
            <NavLink to="/contact-us"> Talk </NavLink>
          </Button>
        </div>

        <div className="section-hero-image">
          <picture>
            <img src=".\img\compliance.webp" alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
      <br />

      <div className="container grid grid-two-column">
        <div className="section-hero-data">

          <h2 className="hero-heading">Result</h2>
          <p className="para">
          When we talk about the result of an action then here three factors affect the result. 
          Your ability, your strategy, and your luck these three factors affect your level of success and failure.
          But if we talk about their duality for eg If your competitor is better than you in all three fields,
          then surely he deserves to win. Vastu management and time management affect all these three areas in their
          own way. The percentage of success increases or decreases accordingly. Vastu and time management work 
          from 20% to 70-80% for some subjects, and it depends on the nature of the subject. Neither one can rely  
          entirely on Vastu and time management, nor entirely rely on only one's actions. These two are 
          complementary to each other_ So we can say, their confluence is the key to success.<br />
          <br />
          You come into a system at the same moment. But it takes some time for positive results. 
          After some time you start feeling everything comes to you conveniently and successfully.
          </p>
        </div>

        <div className="section-image">
          <picture>
            <img src=".\img\result.png" alt="hero image" className="hero-img " />
          </picture>
        </div>    
      </div>
      
    </Wrapper></>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0 ;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 5.8rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

 .para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    dislay: flex;
    align-items: center;
    
 }

 .section-image{
  display: flex;
  align-items: center;
  width: 45%;
  margin-left: 80px;
 }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d0e9f7;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 130%;
    
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default Home

import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
//import { Button } from "../styles/Button";

const HeroSection = () =>{

  return (
   <><Wrapper><section className='section'>
              <NavLink to='/contact-us'>
              <img src="./img/edu.jpg" alt="education" className='image'></img>
              </NavLink>
              <p className='para'>vastu for education</p>
              
              <NavLink to='/contact-us'>
              <img src="./img/mrg.png" alt="marrige" className='image'></img>
              </NavLink>
              <p className='para'>vastu for marrige</p>

              <NavLink to='/contact-us'>
              <img src="./img/carer.jpg" alt="carrer" className='image'></img>
              </NavLink>
              <p className='para'>vastu for carrer</p>
              </section>

            

              <div className='section1'>
              <NavLink to='/contact-us'>
              <img src="./img/hlth.jpg" alt="health" className='image'></img>
              </NavLink>
              <p className='para'>vastu for health</p>

              <NavLink to='/contact-us'>
              <img src="./img/wlth.webp" alt="wealth"className='image'></img>
              </NavLink>
              <p className='para'>vastu for wealth</p>
             
              <NavLink to='/contact-us'>
              <img src="./img/residen.jpg" alt="residential"className='image'></img>
              </NavLink>
              <p className='para'>vastu for residential</p>
             
            </div></Wrapper></>
  )
};

const Wrapper = styled.section`
  padding: 9rem 0;
  .section{
    display: flex;
    flex-direction: colunm;
    max-width: 80%;
    align-items: center;
  }
 
  .section1{
    display: flex;
    flex-direction: colunm;
  }
  .para{
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    dislay: flex;
    align-items: center;
  }
 

  .image{
    max-width: 30%;
    height: auto;
    margin-bottom: 10px;
    align-items: center;
  }
  

 
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;

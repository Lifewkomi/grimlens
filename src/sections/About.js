import React from "react";
import styled from "styled-components";
import Gallery from "../components/Gallery";
import { DoubleArrowRightIcon } from "@radix-ui/react-icons";


const Section = styled.section`
  background-color: ${(props) => props.theme.Body};
  h1 {
    font-family: ${(props) => props.theme.Font2};
    font-size: clamp(35px, 10vw, 480px);
    color: rgb(255,255,255,0.8);
    font-weight: bold;
  }
  @media screen and (max-width: 480px){
  h1{
    font-size: clamp(35px, 18vw, 480px);
    color: #fff;
    text-align: center;
  }
}
`;
const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
width: 60%;
left: 30rem;
@media screen and (max-width: 480px){
  left: 0px;
  width: 100%;
}
`;

const Button1 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  &:hover {
    background-color: ${props => props.theme.TextColor};
    transition: 1ms ease-out;
  }
  @media screen and (max-width: 480px){
  padding: 1rem;
  border-radius: 10px;

}
  
`;
const Button2 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 4rem;
  margin-bottom: 5rem;
  border-radius: 2rem;
  @media screen and (max-width: 480px){
  padding: 2rem;
  border-radius: 20px;
  }
  &:hover{
    background-color: #b8ff00;
    transition: 1ms ease-out;

  }
  
`;
const Button3 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 6rem;
  margin-bottom: 5rem;
  border-radius: 3rem;
  @media screen and (max-width: 480px){
  padding: 3rem;
  border-radius: 30px;
  }
  &:hover {
    background-color: ${props => props.theme.TextColor};
    transition: 1ms ease-out;

  }
`;
const Button4 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 7rem;
  margin-bottom: 5rem;
  border-radius: 4rem;
  &:hover {
    background-color: #b8ff00;
    transition: 1ms ease-out;

  }
  a {
    font-family: ${(props) => props.theme.Font1};
    font-size: 1.5rem;
    line-height: 1rem;
    letter-spacing: 2px;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-weight: bold;
    color: ${props => props.theme.TextColor};
    &:hover {
    color: #000;
    transition: 100ms ease-out;

  }
    svg{
      width: 30px;
      height: 30px;
    }
    
  }
  @media screen and (max-width: 480px){
  padding: 2.5rem;
  border-radius: 30px;
  a{
    font-size: 21px;
    gap: 0rem;
    
  }
}
`;

const About = () => {
  return (
    <Section>
      <h1>GrimLens Gallery</h1>
      <Gallery />
      <Buttons>
        <Button1>
        </Button1>
        <Button2>
        </Button2>
        <Button3>
        </Button3>
        <Button4>
          <a href="../components/Gallery2.js">
            More
            <DoubleArrowRightIcon/>
          </a>
          
        </Button4>
      </Buttons>
    </Section>
  );
};

export default About;

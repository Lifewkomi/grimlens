import React from "react";
import styled from "styled-components";
import Gallery from "../components/Gallery";

const Section = styled.section`
  background-color: ${(props) => props.theme.Body};
  h1 {
    font-family: ${(props) => props.theme.Font2};
    font-size: clamp(35px, 10vw, 480px);
    color: ${(props) => props.theme.TextColor};
  }
`;
const Buttons = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
width: 60%;
left: 30rem;
`;

const Button1 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 2rem;
  margin-bottom: 5rem;
  border-radius: 1rem;
  
`;
const Button2 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 4rem;
  margin-bottom: 5rem;
  border-radius: 2rem;
  
`;
const Button3 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 6rem;
  margin-bottom: 5rem;
  border-radius: 3rem;
  
`;
const Button4 = styled.button`
  position: relative;
  background-color: #fff;
  padding: 7rem;
  margin-bottom: 5rem;
  border-radius: 4rem;
  a {
    font-family: ${(props) => props.theme.Font1};
    font-size: 1.5rem;
    line-height: 1rem;
    letter-spacing: 2px;
    font-size: clamp(35px, 2vw, 480px);
    
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
          <a href="https://www.instagram.com/grimlens/">More</a>
        </Button4>
      </Buttons>
    </Section>
  );
};

export default About;

import React from 'react';
import styled from 'styled-components';

import img1 from '../Assets/1.webp';
import img2 from '../Assets/2.jpg';
import img3 from '../Assets/3.jpg';
import img5 from '../Assets/5.jpg';
import img6 from '../Assets/6.jpg';
import img7 from '../Assets/7.jpg';
import img8 from '../Assets/8.jpg';
import img9 from '../Assets/9.jpg';
import img13 from '../Assets/13.jpg';

const Section = styled.section`
  background-color: ${props => props.theme.Body};
  min-height: 150vh;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  @media screen and (max-width: 480px){
    flex-direction: column;
    
  }
  @media screen and (max-width: 780px){
    
  }
`;
const IntroText = styled.div`
  flex-basis: 48%;
  max-width: 60%;
  display: flex;
  flex-direction: column;
  margin-top: 12rem;
  align-items: center;
  @media screen and (max-width: 480px) {
    max-width: 100vw;
    display: flex;
    flex-direction: column; 
    margin-top: 6rem;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-family: ${(props) => props.theme.Font2};
  font-size: clamp(35px, 10vw, 480px);
  color: ${(props) => props.theme.TextColor};
  text-align: center;
  font-weight: bolder;
  line-height: 1;
  background: linear-gradient(135deg, #fff 50%, #ffc107 50%);
  background-clip: content-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media screen and (max-width: 480px) {
    font-size: clamp(35px, 19vw, 480px);
    line-height: 1;
    
  }
`;

const Subtitle = styled.p`
  margin: 20px 80px;
  font-family: ${props => props.theme.Font2};
  text-align: center;
  font-size: 1rem;
  color: ${props => props.theme.Color};
  font-weight: lighter;
  letter-spacing: 0.5px;
  @media screen and (max-width: 480px) {
    font-size: 1.2rem; 
    text-align: center;
    margin: 20px 0px;    
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonPrimary = styled.button`
  padding: 10px 20px;
  background-color: #b8ff00;
  color: #000;
  border: none;
  border-radius: 8px;
  font-family: ${props => props.theme.Font1};
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #a4e600;
  }
`;

const ButtonSecondary = styled.button`
  padding: 10px 20px;
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 8px;
  font-family: ${props => props.theme.Font1};
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
const PreviewGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-basis: 52%;
  /* max-width: 40%; */
`
const ImageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  align-items: center;

  &:nth-child(1) {
    transform: translateX(7%);
  }

  &:nth-child(2) {
    transform: translateX(-7%);
    transform: translateY(-10%);
  }

  &:nth-child(3) {
    transform: translateX(10%);
    transform: translateY(-20%);

  }
`;
const ImageItem = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`
const Home = () => {
  return (
    <Section>
      <IntroText>
        <Title>GrimLens</Title>
        <Subtitle>
            Welcome to the official Grimlens Automotive Photography Portfolio.
            I aim to showcase dynamic and captivating automotive photography, featuring all genres and flavors of automotive excellence.
        </Subtitle>
        <ButtonContainer>
          <ButtonPrimary>
            <a href='https://www.instagram.com/grimlens.ke'>ME</a>
          </ButtonPrimary>
          <ButtonSecondary>
          <a href='https://www.instagram.com/grimlens.ke'>See My Gallery</a>
          </ButtonSecondary>
        </ButtonContainer>
      </IntroText>

      <PreviewGallery>
        <ImageRow>
          <ImageItem src={img1} alt="Image 1" />
          <ImageItem src={img13} alt="Image 2" />
          <ImageItem src={img3} alt="Image 3" />
        </ImageRow>
        <ImageRow>
          <ImageItem src={img2} alt="Image 4" />
          <ImageItem src={img5} alt="Image 5" />
          <ImageItem src={img6} alt="Image 6" />
        </ImageRow>
        <ImageRow>
          <ImageItem src={img7} alt="Image 7" />
          <ImageItem src={img8} alt="Image 8" />
          <ImageItem src={img9} alt="Image 9" />
        </ImageRow>
      </PreviewGallery>
    </Section>
  )
}

export default Home;
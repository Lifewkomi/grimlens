import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

import img1 from '../Assets/mustang.png';
import img2 from '../Assets/17.jpg';
import img3 from '../Assets/14.jpg';
import img4 from '../Assets/20.jpg';
import img5 from '../Assets/10.jpg';
import img6 from '../Assets/6.jpg';
import img7 from '../Assets/11.jpg';
import img8 from '../Assets/23.jpg';


const Section = styled.section`
  background-color: ${props => props.theme.Body};
  height: 300vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Sticky = styled.div`
  background-color: rgb(0,0,0,0.5);
  position: sticky;
  overflow: hidden;
  top: 0;
  height: 100vh;
`;
const El = styled(motion.div)`
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-of-type(2) {
    .imageContainer {
      top: -30vh;
      left: 5vw;
      width: 35vw;
      height: 30vh;
    }
  }
  &:nth-of-type(3) {
    .imageContainer {
      top: -10vh;
      left: -25vw;
      width: 20vw;
      height: 45vh;
    }
  }
  &:nth-of-type(4) {
    .imageContainer {
      left: 27.5vw;
      width: 25vw;
      height: 25vh;
    }
  }
  &:nth-of-type(5) {
    .imageContainer {
      top: 27.5vh;
      left: 5vw;
      width: 20vw;
      height: 25vh;
    }
  }
  &:nth-of-type(6) {
    .imageContainer {
      top: 27.5vh;
      left: -22.5vw;
      width: 30vw;
      height: 25vh;
    }
  }
  &:nth-of-type(7) {
    .imageContainer {
      top: 28.5vh;
      left: 25vw;
      width: 16vw;
      height: 27vh;
    }
  }
  &:nth-of-type(8) {
    .imageContainer {
      top: -28.5vh;
      left: 34vw;
      width: 20vw;
      height: 25vh;
    }
  }

  @media screen and (max-width: 480px){
    &:nth-of-type(2) {
    .imageContainer {
      top: -30vh;
      left: 5vw;
      width: 35vw;
      height: 30vh;
    }
  }
  &:nth-of-type(3) {
    .imageContainer {
      top: -17vh;
        left: -27vw;
        width: 20vw;
        height: 45vh;
    }
    }
  }
  &:nth-of-type(4) {
    .imageContainer {
      left: 27.5vw;
      width: 25vw;
      height: 25vh;
    }
  }
  &:nth-of-type(5) {
    .imageContainer {
      top: 27.5vh;
    left: 3.5vw;
    width: 30vw;
    height: 26vh;
    }
  }
  &:nth-of-type(6) {
    .imageContainer {
      top: 24.5vh;
    left: -27.5vw;
    width: 30vw;
    height: 25vh;
    }
  }
  &:nth-of-type(7) {
    .imageContainer {
      top: 23.5vh;
    left: 31vw;
    width: 23vw;
    height: 19vh;
    }
  }
  &:nth-of-type(8) {
    .imageContainer {
      top: -30.5vh;
        left: 36vw;
        width: 20vw;
        height: 25vh;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 25vw;
  height: 25vh;
  
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    
  }
`;
const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: img1,
      scale: scale4,
    }, 
    {
      src: img2,
      scale: scale5,
    },
    {
      src: img3,
      scale: scale6,
    },
    {
      src: img4,
      scale: scale6,
    },
    {
      src: img5,
      scale: scale7,
    },
    {
      src: img6,
      scale: scale9,
    },
    {
      src: img7,
      scale: scale8,
    },
    {
      src: img8,
      scale: scale8,
    }
]

  return (
    <Section ref={containerRef}>
      <Sticky>
         {pictures.map(({ src, scale }, index) => (
          <El key={index} style={{ scale }}>
            <ImageContainer className="imageContainer">
              <img src={src} alt="Grimlens" />
            </ImageContainer>
          </El>
        ))} 
      </Sticky>
    </Section>
  );
};

export default Gallery;

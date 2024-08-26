import React, { useRef } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

import img1 from '../Assets/1.webp';
import img3 from '../Assets/3.jpg';
import img4 from '../Assets/4.webp';
import img5 from '../Assets/5.jpg';
import img6 from '../Assets/6.jpg';
import img7 from '../Assets/7.jpg';
import img17 from '../Assets/17.jpg';

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
      top: 22.5vh;
      left: 25vw;
      width: 15vw;
      height: 15vh;
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
      src: img17,
      scale: scale5,
    },
    {
      src: img3,
      scale: scale6,
    },
    {
      src: img4,
      scale: scale8,
    },
    {
      src: img5,
      scale: scale9,
    },
    {
      src: img6,
      scale: scale7,
    },
    {
      src: img7,
      scale: scale9,
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

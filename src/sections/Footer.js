import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import logo from "../Assets/#1.png";
import { IconCopyright } from "@tabler/icons-react";

const Section = styled.section`
  position: relative;
  background-color: #000;
  display: flex;
  align-items: center;
  padding: 2rem;
  justify-content: flex-start;
  gap: 20rem;
  @media screen and (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 1rem;
    padding: 2rem 1rem;
  }
`;
const Copyright = styled.div`
display: flex;
align-items: center;
h1{
    font-family: ${props => props.theme.Font2};
    font-size: 1rem;
    color: #fff;
}
@media screen and (max-width: 480px) {
    gap: 2px;
    h1{
        text-align: center;
        font-size: 1rem;
    }
}
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IMG = styled.img`
  object-fit: cover;
  height: 3em;
  background: ${(props) => props.theme.logo};
  border-radius: 100%;

  @media screen and (max-width: 480px) {
    height: 2em;
  }
`;
const Name = styled(motion.a)`
  padding-left: 3px;
  font-family: ${(props) => props.theme.Font2};
  font-size: 2rem;
  letter-spacing: 1px;
  color: #fff;
  
`;
const Footer = () => {
  return (
    <Section>
      <Copyright>
        <IconCopyright color="#fff" />
        <h1>All RIGHTS RESERVED. 2024</h1>
      </Copyright>
      <LogoContainer>

        <IMG src={logo} alt="Logo" />

        <Name
          whileHover={{ scale: 1.1, y: -5, color: "#000" }}
          whileTap={{ scale: 0.9, y: 0 }}
          href="philemonkomi.vercel.app"
        >
          Komi
        </Name>

      </LogoContainer>
    </Section>
  );
};

export default Footer;

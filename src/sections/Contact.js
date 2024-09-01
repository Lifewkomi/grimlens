import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import {IconBrandInstagram, IconBrandTiktok, IconBrandWhatsapp, IconMail} from "@tabler/icons-react";

const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
  }
  @media screen and (max-width: 768px) {
  }
`;
const Title = styled.div`
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95vw;
  h1 {
    font-family: ${(props) => props.theme.Font2};
    font-weight: bold;
    color: #fff;
    line-height: 0.9;
    position: relative;
    font-size: clamp(35px, 12rem, 480px);
    overflow: hidden;
  }
  svg {
    background-color: #fff;
    border-radius: 10rem;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    h1 {
      font-size: clamp(35px, 19vw, 480px);
      line-height: 8rem;
    }
    svg {
      display: none;
    }
  }
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95vw;
  padding-bottom: 8rem;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
  @media screen and (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
    gap: 2rem;
  }
`;
const Icons = styled.div`
  display: flex;
  /* gap: 2rem; */
  .icons{
    width: 140px;
    height: 140px;
    border-radius: 20%;
  }
  svg{
    width: 140px;
    height: 140px;
  }
  @media screen and (max-width: 480px){
    width: 100vw;
    svg{
      width: 100px;
        height: 100px;
        border-radius: 0;
  }
  }
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    a {
      font-family: ${(props) => props.theme.Font1};
      font-size: 1.5rem;
      color: ${(props) => props.theme.Color};
    }
    :nth-child(2) {
      color: #b8ff00;
    }
  }
  h2 {
    font-family: ${(props) => props.theme.Font2};
    color: ${(props) => props.theme.TextColor};
    font-size: clamp(35px, 90px, 480px);
    font-weight: bold;
  }
  .mail{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    a{
      font-size: 25px;
      color: ${props => props.theme.Color};
    }
  }
  @media screen and (max-width: 480px) {
    align-items: center;
    h2 {
      text-align: center;
      font-size: 45px;
    }
    .mail{
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const Contact = () => {
  return (
    <Section>
      <Title>
        <h1>Grimlens</h1>
        <TriangleRightIcon width="150px" height="150px" />
      </Title>
      <SubTitle>
        <Icons>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="icons"
          >
            <IconBrandInstagram  color="#DD2A7B"/>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="icons"
          >
            <IconBrandWhatsapp color="#25D366" />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="icons"
          >
            <IconBrandTiktok color="#fff" />
          </motion.div>
        </Icons>
        <Address>
          <div>
            <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }} href="https://www.instagram.com/grimlens.ke?igsh=MTB2MGljdHowY3U0Nw==">Gallery</motion.a>
            <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }} href="https://www.instagram.com/grimlens.ke?igsh=MTB2MGljdHowY3U0Nw==">Bookings</motion.a>
            <motion.a whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }} href="https://www.instagram.com/grimlens.ke?igsh=MTB2MGljdHowY3U0Nw==">Studio</motion.a>
          </div>
          <h2>GET IN TOUCH</h2>
          <motion.div whileHover={{ scale: 1.1}}
            whileTap={{ scale: 0.9 }}className="mail">
            <IconMail width="35px" height="35px" color="#b8ff00" />
            <a href="mailto:grimlenske@gmail.com">grimlenske@gmail.com</a>
          </motion.div>
        </Address>
      </SubTitle>
    </Section>
  );
};

export default Contact;

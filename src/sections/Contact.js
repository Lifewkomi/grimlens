import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { TriangleRightIcon } from "@radix-ui/react-icons";
import { SocialIcon } from "react-social-icons";

const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.9);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Title = styled.div`
  border-bottom: 0.5px solid #fff;
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
  @media screen and (max-width: 480px) {
    h1 {
      font-size: clamp(35px, 19vw, 480px);
    }
  }
  svg {
    background-color: #fff;
    /* padding: 5rem; */
    border-radius: 10rem;
  }
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 95vw;
`;

const Icons = styled.div`
`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      font-size: 1rem;
      color: #fff;
    }
  }
  h2 {
    color: ${(props) => props.theme.Color};
    font-size: clamp(35px, 6vw, 480px);
    font-weight: medium;
  }
`;
const Footer = styled.div`
border-top: 0.5px solid #fff;
height: 0.5vw;
width: 95vw;
`

const Contact = () => {
  return (
    <Section>
      <Title>
        <h1>Grimlens</h1>
        <TriangleRightIcon width="150px" height="150px" />
      </Title>
      <SubTitle>
        <Icons>
          <SocialIcon
            network="whatsapp"
            url="https://www.github.com/lifewkomi"
            className="social-icon"
            style={{ width: "150px", height: "150px" }}
          />
          <SocialIcon
            network="instagram"
            url="https://www.github.com/lifewkomi"
            className="social-icon"
            style={{ width: "150px", height: "150px" }}
          />
          <SocialIcon
            network="pinterest"
            url="https://www.github.com/lifewkomi"
            className="social-icon"
            style={{ width: "150px", height: "150px" }}
          />
        </Icons>
        <Address>
          <div>
            <a href="https://www.instagram.com/grimlens">Gallery</a>
            <a href="https://www.instagram.com/grimlens">Directors</a>
            <a href="https://www.instagram.com/grimlens">Venue</a>
          </div>
          <h2>GET IN TOUCH</h2>
        </Address>
      </SubTitle>
    </Section>
  );
};

export default Contact;

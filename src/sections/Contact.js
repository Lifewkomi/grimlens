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
  @media screen and (max-width: 480px){
    
  }
  @media screen and (max-width: 768px){
    
  }
`;
const Title = styled.div`
  border-bottom: 1px solid rgb(255,255,255,0.2);
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
    }
    svg{
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
  border-bottom: 1px solid rgb(255,255,255,0.2);
  @media screen and (max-width: 480px){
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 4rem;
    gap: 2rem;
  }
`;

const Icons = styled.div`
display: flex;
gap: 2rem;
@media screen and (max-width: 480px){
    
}

`;
const Address = styled.div`
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    a {
      font-family: ${props => props.theme.Font1};
      font-size: 1.5rem;
      color: ${props => props.theme.TextColor};
    }
    :nth-child(2){
      color: #b8ff00;
    }
    
  }
  h2 {
    font-family: ${props => props.theme.Font2};
    color: ${(props) => props.theme.Color};
    font-size: clamp(35px, 80px, 480px);
    font-weight: bold;
  }
  @media screen and (max-width: 480px){
    align-items: center;
    h2{
      text-align: center;
      font-size: 45px;
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
          <SocialIcon
            network="whatsapp"
            url="https://www.github.com/lifewkomi"
            className="social-icon"
            style={{ width: "75px", height: "75px" }}
          />
          <SocialIcon
            network="instagram"
            url="https://www.github.com/lifewkomi"
            className="social-icon"
            style={{width: "75px", height: "75px"}}
          />
          <SocialIcon
            network="pinterest"
            url="https://www.github.com/lifewkomi"
            className="social-icon"
            style={{ width: "75px", height: "75px" }}
          />
        </Icons>
        <Address>
          <div>
            <a href="https://www.instagram.com/grimlens">Gallery</a>
            <a href="https://www.instagram.com/grimlens">Bookings</a>
            <a href="https://www.instagram.com/grimlens">Studio</a>
          </div>
          <h2>GET IN TOUCH</h2>
        </Address>
      </SubTitle>
    </Section>
  );
};

export default Contact;

import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
background-color: ${props => props.theme.Body};
min-height: 100vh;
h1{
    font-family: ${props => props.theme.Font2};
    font-weight: bold;
    color: #fff;
    line-height: 0.9;
    position: relative;
    font-size: clamp(35px, 12rem, 480px);
    overflow: hidden;
}
`
const Contact = () => {
  return (
    <Section>
     <h1>Grimlens</h1>   
    </Section>
  )
}

export default Contact;
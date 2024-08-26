import React from 'react'
import styled from 'styled-components'
import Gallery from '../components/Gallery'

const Section = styled.section`
  background-color: ${props => props.theme.Body};
h1{
    font-family: ${props => props.theme.Font2};
    font-size: 6rem;
    color: ${props => props.theme.TextColor};
}
`
const About = () => {
  return (
    <Section>
        <h1>GrimLens Gallery</h1>
        <Gallery />
    </Section>
  )
}

export default About
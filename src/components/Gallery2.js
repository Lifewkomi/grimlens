import React from 'react';
import styled from 'styled-components';
import Grid from './LayoutGrid/Demo';

const Section = styled.section`
background-color: ${props => props.theme.Body};
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
h1{
  font-size: 7rem;
  color: ${props => props.theme.Color};
  font-weight: bold;
  letter-spacing: 5px;
  background: linear-gradient(522deg, #fff 50%, #ffc107 50%);
  background-clip: content-box;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h2{
  font-size: 1rem;
  font-family: ${props => props.theme.Font2};
  color: ${props => props.theme.TextColor}
}

@media screen and (max-width: 480px){
  h1{
    font-size: 6rem;
    line-height: 115px;
    text-align: center;
  }
}
`
const Gallery2 = () => {
  return (
    <Section>
        <h1 className=' font-neue-montreal '>My Gallery</h1>
        <h2>Psst!...Click to see the magic</h2>
        <Grid />
    </Section>
  )
}

export default Gallery2;
import React from 'react';
import styled from 'styled-components';
import LayoutGrid from './LayoutGrid/Demo';

const Section = styled.section`
min-height: 100vh;
background-color: ${props => props.theme.Body};
display: flex;
flex-direction: column;
justify-content: center;
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
`
const Gallery2 = () => {
  return (
    <Section>
        <h1 className=' font-neue-montreal '>My Gallery</h1>
        <h2>Psst!...Click to see the magic</h2>
        <LayoutGrid />
    </Section>
  )
}

export default Gallery2;
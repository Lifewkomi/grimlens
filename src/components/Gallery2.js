import React from 'react';
import styled from 'styled-components';
import LayoutGrid from './LayoutGrid/Demo'
const Section = styled.section`
min-height: 200vh;
background-color: ${props => props.theme.Body};

`
const Gallery2 = () => {
  return (
    <Section>
        <LayoutGrid />
    </Section>
  )
}

export default Gallery2;
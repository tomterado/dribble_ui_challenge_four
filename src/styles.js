import React from 'react';

import styled from 'styled-components';

/*
Structure
    Section 1 - main hero - DONE
        navigation
        main hero image content
    Section 2 - why - DOING
        Figures row
        Client row
        Watch video row
    Section 3 - benefits
        benefits row
        consukting row
        customer row
    Section 3.5
        three Cards
    Section 4.0
        contact us
    Section 5 - footer
        far left column
        three columns
 */

// display: flex;
// justify-content: space-between;
// align-items: center;

const MainHeroContainer = styled.section`
    padding-left: 4em;
    padding-right: 4em;
    background-color: #324ECE;
    // height: 250vh;
`

const NavigationContainer = styled.div`
  height: 75px;
  padding: 1em;
  border: 1px dotted white;
`;

const NavigationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px dotted red;
`;

const DivFlexRow = styled.div`
    display: flex;
    border: 1px dotted yellow;

`;

const MainHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  justify-content: center;
  align-items: center;
  border: 1px dotted aqua;
`;

const WhyContainer = styled.div`
  margin-top: 4em;
  height: 125vh;
  padding: 4em;
  
  border: 1px dotted white;
  background-color: #3F5CE7;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
`;

const WhyContent = styled.div`
    display: flex;
    padding-left: 2em;
    padding-right: 2em;
`;

const FiguresContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    border: 1px dotted white;
`;

const ClientContainer = styled.div`
    margin-top: 6em;
    margin-bottom: 6em;
    display: flex;
    flex-direction: row;
    // width: 50%;
    padding-left: 2em;
    padding-right: 2em;
    border: 1px dotted white;
`;

const ClientContent = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
`;

const VideoContainer = styled.div`
    display: flex;
    flex-direction: row;
    // width: 50%;
    border: 1px dotted white;
`;

const VideoContent = styled.div`
    flex: 6;
    display: flex;
    flex-direction: column;
`;

const PlaceHolderImage = styled.div`
    width: 70%;
    height: 361px;
    background: #C4C4C4;
`;




export {
    MainHeroContainer,
    NavigationContainer,
    NavigationContent,
    DivFlexRow,
    MainHeroContent,
    WhyContainer,
    WhyContent,
    FiguresContent,
    ClientContainer,
    ClientContent,
    VideoContainer,
    VideoContent,
    PlaceHolderImage,
}

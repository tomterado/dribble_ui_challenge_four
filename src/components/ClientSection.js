import React from 'react';
import '../App.css';
import {
    NavigationContainer,
    NavigationContent,
    DivFlexRow,
    WhyContainer,
    WhyContent,
    FiguresContent,
    ClientContainer,
    ClientContent,
    VideoContainer,
    VideoContent,
    PlaceHolderImage, MainHeroContainer,
} from "../styles";

function ClientSection() {
    return(
        <ClientContainer>
            <ClientContent>
                <DivFlexRow style={{height: 200}}>
                    <h1>hi</h1>
                </DivFlexRow>
            </ClientContent>
            <ClientContent>
                <DivFlexRow style={{height: 200}}>
                    <h1>hi</h1>
                </DivFlexRow>
            </ClientContent>
        </ClientContainer>

    )
}

export default ClientSection;

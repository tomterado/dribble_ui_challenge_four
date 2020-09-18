import React from 'react';
import '../App.css';
import {
    WhyContainer,
} from "../styles";
import FiguresSection from './FiguresSection'
import ClientSection from './ClientSection'
import VideoSection from './VideoSection'

function WhySection() {
    return(
        <WhyContainer>
            <FiguresSection/>
            <ClientSection/>
            <VideoSection/>
        </WhyContainer>
    )
}

export default WhySection;

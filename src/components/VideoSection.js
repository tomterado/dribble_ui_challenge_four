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

function VideoSection() {
    return(
        <VideoContainer>
            <VideoContent>
                <PlaceHolderImage/>
            </VideoContent>
            <ClientContent>
                <h1>Watch out Patient Video</h1>
                <p>
                    "Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam
                    rem aperiam, eaque ipsa quae ab illo inventore
                    veritatis et quasi architecto beatae vitae dicta
                    sunt explicabo.
                </p>
            </ClientContent>
        </VideoContainer>
    )
}

export default VideoSection;

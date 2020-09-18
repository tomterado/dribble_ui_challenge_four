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

function FiguresSection() {
    return(
        <WhyContent>
            <FiguresContent>
                <DivFlexRow style={{height: 200}}>
                    <h1>hi</h1>
                </DivFlexRow>
                <DivFlexRow style={{height: 200}}> <h1>hi</h1> </DivFlexRow>
            </FiguresContent>
            <FiguresContent>
                <div>
                    <h1>We help your pscyhological health</h1>
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo.
                    </p>
                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam
                        rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta
                        sunt explicabo.
                    </p>
                </div>
            </FiguresContent>
        </WhyContent>

    )
}

export default FiguresSection;

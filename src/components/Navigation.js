import React from 'react';
import '../App.css';
import {
    NavigationContainer,
    NavigationContent,
    DivFlexRow,
} from "../styles";


function Navigation() {
    return(
        <NavigationContainer>
            <NavigationContent>
                <h1> Logo </h1>
                <DivFlexRow>
                    <h1>Location</h1>
                    <h1>About Us</h1>
                    <h1>Privacy & Legal</h1>
                    <h1>Contact</h1>
                    <h1>FAQ</h1>
                </DivFlexRow>
            </NavigationContent>
        </NavigationContainer>
    )
}

export default Navigation;

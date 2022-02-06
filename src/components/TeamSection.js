import Title from './Title';
import TeamCard from './TeamCard';
import Image1 from '../images/bex.jpg';
import Image2 from '../images/cramer.png';
import Image3 from '../images/galloway.png';
import Image4 from '../images/cramer.png';
import React, { useState, useEffect } from "react";
import styled from 'styled-components/native'

import { Box, Center, Container, Flex, HStack, Column } from "native-base";

//import { Alert } from 'react-native-bootstrap';
const TeamContainer=styled.View`
    padding-top:20px; 
    padding-bottom:20px; 
    text-align:center;
`
const FlexWrap=styled.View`
    display:flex;
    flex-wrap 
`
//  className="max-w-7xl mx-auto px-4"
export default function TeamSection() {
    return (
        <TeamContainer>
            <Center >
                <Title heading="Here are our heroes">
                    According to the National Oceanic.
                </Title>
                <Flex maxW="100%" justifyContent="center" alignItems="center" flexDirection={{
                    base: 'column',
                    md: 'row'
                }}>
                    <TeamCard
                        img={Image1}
                        name="Ryan Tompson"
                        position="Web Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Romina Hadid"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="Alexa Smith"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    />
                    <TeamCard
                        img={Image4}
                        name="Jenna Kardi"
                        position="Founder and CEO"
                    />
                </Flex>
            </Center>
        </TeamContainer>
    );
}

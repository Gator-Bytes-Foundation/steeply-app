//import Title from './Title';
import TeamCard from './TeamCard';
import Image1 from '../images/bex.jpg';
import Image2 from '../images/cramer.png';
import Image3 from '../images/galloway.png';
import Image4 from '../images/cramer.png';
import React, { useState, useEffect } from "react";
import styled from 'styled-components/native'

import { Box, Center, Container, ScrollView, Flex, HStack, Column, Text } from "native-base";

const TeamContainer=styled.ScrollView`
    display:flex;
    background-color:white;
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
                <Flex maxW="100%" justifyContent="center" alignItems="center" mb={250} flexDirection={{
                    base: 'column',
                    md: 'row'
                }}>
                    <TeamCard
                        img={Image1}
                        name="Rebecca Soodeen"
                        position="OT Student"
                    />
                    <TeamCard
                        img={Image2}
                        name="Romina Hadid"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="Galloway"
                        position="OT"
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

import TeamCard from './TeamCard';
import bex from '../images/bex.jpg';
import logan from '../images/log.jpg';
import React from "react";
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
export default function TeamSection() {
    return (
        <TeamContainer>
            <Center >
                <Flex maxW="100%" justifyContent="center" alignItems="flex-start" mb={250} p="5" flexDirection={{
                    base: 'column',
                    md: 'row'
                }}>
                    <TeamCard
                        img={bex}
                        name="Rebecca Cundiff"
                        position="Rebecca is an Occupational Therapist with a huge heart for pediatric care, especially in the field of oncology. Rebecca came up with the idea for Steeply after seeing first hand how much work both children and adults have to go through in order to get all the resources and educational tools they need to combat cancer."
                    />
                    <TeamCard
                        img={logan}
                        name="Logan Cundiff"
                        position="Logan is a software developer and is also Rebecca's husband! After finishing his masters in Computer Science, he decided to use his knoledge to lend a hand with assisting Rebecca with the development of Steeply!"
                    />
                </Flex>
            </Center>
        </TeamContainer>
    );
}
